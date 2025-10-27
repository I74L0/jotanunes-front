import React, { useRef } from 'react'; // Certifique-se de importar 'React' e 'useRef'

const MenuTabs = ({ activeIndex = 0, onChange = () => {} }) => {
  const menuRef = useRef(null);

  // Lista dos títulos das abas para evitar repetição no JSX
  const tabTitles = [
    "Prefácio",
    "Unidades Privativas",
    "Área Comum",
    "Materiais",
    "Observações"
  ];

  function clickItem(i) {
    if (i === activeIndex) return; // Se for o item ativo, não faz nada
    
    if (menuRef.current) {
      menuRef.current.style.removeProperty('--timeOut');
    }
    
    onChange(i); 
  }

  return (
    <>
      <section className="wrapper">
        <ul className="tabs" ref={menuRef}> {/* Adicionei o ref aqui */}
          {tabTitles.map((title, index) => (
            <li 
              key={index} // Chave única é importante no map
              className={index === activeIndex ? 'active' : ''} // Aplica a classe 'active' se o index for o ativo
              onClick={() => clickItem(index)}
            >
              {title}
            </li>
          ))}
        </ul>
      </section>
      
      {/* OPCIONAL: Adicionar a renderização do conteúdo da aba aqui
        Você usaria o 'activeIndex' para decidir qual conteúdo mostrar. 
        Por exemplo:
      */}
      {/* <div className="tab-content">
        {activeIndex === 0 && <div>Conteúdo do Prefácio</div>}
        {activeIndex === 1 && <div>Conteúdo das Unidades Privativas</div>}
        // ... e assim por diante
      </div> 
      */}
    </>
  );
}

export default MenuTabs; // Não esqueça de exportar o componente

// Exemplo de como usar (no componente pai):
/*
const ParentComponent = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <MenuTabs 
      activeIndex={currentTab} 
      onChange={setCurrentTab} 
    />
  );
}
*/