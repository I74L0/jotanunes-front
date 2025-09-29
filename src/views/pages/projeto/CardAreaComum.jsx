import { useState } from 'react'
import { 
  CCard,
  CCardBody,
  CCol,
  CCollapse,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react'
import { IoIosAddCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'

export default function CardUnidades() {
  const navigate = useNavigate()
  const [isGuaritaVisible, setGuaritaVisible] = useState(false)
  const [isGourmetsVisible, setGourmetsVisible] = useState(false)
  const [isQuiosquesVisible, setQuiosquesVisible] = useState(false)
  const [isCopaFuncionariosVisible, setCopaFuncionariosVisible] = useState(false)
  const [isSalaoFestasVisible, setSalaoFestasVisible] = useState(false)
  const [isBrinquedotecaVisible, setBrinquedotecaVisible] = useState(false)
  const [isPlaygroundVisible, setPlaygroundVisible] = useState(false)
  const [isPiscinaAdultoVisible, setPiscinaAdultoVisible] = useState(false)
  const [isPiscinaInfantilVisible, setPiscinaInfantilVisible] = useState(false)
  const [isSolariumVisible, setSolariumVisible] = useState(false)
  const [isDeckMolhadoVisible, setDeckMolhadoVisible] = useState(false)
  const [isSaunaVisible, setSaunaVisible] = useState(false)
  const [isAcademiaVisible, setAcademiaVisible] = useState(false)
  const [isQuadraPoliesportivaVisible, setQuadraPoliesportivaVisible] = useState(false)
  const [isEspacoPetVisible, setEspacoPetVisible] = useState(false)
  const [isBicicletarioVisible, setBicicletarioVisible] = useState(false)
  const [isVestiariosVisible, setVestiariosVisible] = useState(false)

  const ambientes = [
    {
      id: "2.1",
      nome: "Guarita",
      state: isGuaritaVisible,
      setState: setGuaritaVisible,
      items: [
        { item: "Piso", descricao: "Porcelanato", status: true },
        { item: "Rodapé", descricao: "Porcelanato, h-5cm", status: false },
        { item: "Parede", descricao: "Pintura PVA látex branco sobre gesso ou massa de regularização PVA", status: true },
      ],
    },
    {
      id: "2.2",
      nome: "Salão de Festas Gourmet",
      state: isGourmetsVisible,
      setState: setGourmetsVisible,
      items: [
        { item: "Piso", descricao: "Porcelanato", status: true },
        { item: "Rodapé", descricao: "Porcelanato, h-5cm", status: false },
        { item: "Parede", descricao: "Pintura PVA látex branco", status: true },
        { item: "Cozinha", descricao: "Bancada em granito", status: true },
      ],
    },
    {
      id: "2.3",
      nome: "Quiosques",
      state: isQuiosquesVisible,
      setState: setQuiosquesVisible,
      items: [
        { item: "Churrasqueira", descricao: "Aço inox", status: true },
        { item: "Pia", descricao: "Granito com cuba dupla", status: true },
        { item: "Lixeira", descricao: "Coletora de recicláveis", status: false },
      ],
    },
    {
      id: "2.4",
      nome: "Copa Funcionários",
      state: isCopaFuncionariosVisible,
      setState: setCopaFuncionariosVisible,
      items: [
        { item: "Pia", descricao: "Aço inox com torneira", status: true },
        { item: "Armário", descricao: "MDF com acabamento", status: false },
        { item: "Geladeira", descricao: "Capacidade 300L", status: true },
      ],
    },
    {
      id: "2.5",
      nome: "Salão de Festas",
      state: isSalaoFestasVisible,
      setState: setSalaoFestasVisible,
      items: [
        { item: "Piso", descricao: "Vinílico", status: true },
        { item: "Iluminação", descricao: "LED embutido", status: true },
        { item: "Portas", descricao: "Estandart em madeira", status: false },
      ],
    },
    {
      id: "2.6",
      nome: "Brinquedoteca",
      state: isBrinquedotecaVisible,
      setState: setBrinquedotecaVisible,
      items: [
        { item: "Piso", descricao: "Emborrachado", status: true },
        { item: "Brinquedos", descricao: "Aprovados INMETRO", status: true },
        { item: "Segurança", descricao: "Proteções nas tomadas", status: true },
      ],
    },
    {
      id: "2.7",
      nome: "Playground",
      state: isPlaygroundVisible,
      setState: setPlaygroundVisible,
      items: [
        { item: "Piso", descricao: "Emborrachado externo", status: true },
        { item: "Estrutura", descricao: "Metálica com pintura", status: false },
        { item: "Cercas", descricao: "Proteção perimetral", status: true },
      ],
    },
    {
      id: "2.8",
      nome: "Piscina Adulto",
      state: isPiscinaAdultoVisible,
      setState: setPiscinaAdultoVisible,
      items: [
        { item: "Tratamento", descricao: "Cloração automática", status: true },
        { item: "Bombeamento", descricao: "Bomba 2HP", status: true },
        { item: "Degraus", descricao: "Antiaderente", status: false },
      ],
    },
    {
      id: "2.9",
      nome: "Piscina Infantil",
      state: isPiscinaInfantilVisible,
      setState: setPiscinaInfantilVisible,
      items: [
        { item: "Profundidade", descricao: "0.6 m", status: true },
        { item: "Brinquedos", descricao: "Acessórios lúdicos", status: false },
        { item: "Tratamento", descricao: "Filtragem diária", status: true },
      ],
    },
    {
      id: "2.10",
      nome: "Solarium",
      state: isSolariumVisible,
      setState: setSolariumVisible,
      items: [
        { item: "Deck", descricao: "Madeira tratada", status: true },
        { item: "Espreguiçadeiras", descricao: "Em sintético", status: false },
        { item: "Guarda-sol", descricao: "Estrutura metálica", status: true },
      ],
    },
    {
      id: "2.11",
      nome: "Deck Molhado",
      state: isDeckMolhadoVisible,
      setState: setDeckMolhadoVisible,
      items: [
        { item: "Revestimento", descricao: "Antiderrapante", status: true },
        { item: "Dreno", descricao: "Sistema linear", status: true },
        { item: "Corrimão", descricao: "Inox", status: false },
      ],
    },
    {
      id: "2.12",
      nome: "Sauna",
      state: isSaunaVisible,
      setState: setSaunaVisible,
      items: [
        { item: "Forno", descricao: "Elétrico 6kW", status: true },
        { item: "Revestimento", descricao: "Madeira nobre", status: true },
        { item: "Ventilação", descricao: "Exaustor", status: false },
      ],
    },
    {
      id: "2.13",
      nome: "Academia",
      state: isAcademiaVisible,
      setState: setAcademiaVisible,
      items: [
        { item: "Equipamentos", descricao: "Esteira, bike, pesos", status: true },
        { item: "Piso", descricao: "Borracha técnica", status: true },
        { item: "Ar-condicionado", descricao: "Split 18.000 BTU", status: false },
      ],
    },
    {
      id: "2.14",
      nome: "Quadra Poliesportiva",
      state: isQuadraPoliesportivaVisible,
      setState: setQuadraPoliesportivaVisible,
      items: [
        { item: "Piso", descricao: "Poliuretano", status: true },
        { item: "Iluminação", descricao: "Holofotes 500W", status: false },
        { item: "Rede", descricao: "Voleibol/Futebol", status: true },
      ],
    },
    {
      id: "2.15",
      nome: "Espaço Pet",
      state: isEspacoPetVisible,
      setState: setEspacoPetVisible,
      items: [
        { item: "Piso", descricao: "Ladrilho técnico", status: true },
        { item: "Bebedouro", descricao: "Automático", status: false },
        { item: "Cerca", descricao: "Proteção perimetral", status: true },
      ],
    },
    {
      id: "2.16",
      nome: "Bicicletário",
      state: isBicicletarioVisible,
      setState: setBicicletarioVisible,
      items: [
        { item: "Suporte", descricao: "Capacidade 20 bikes", status: true },
        { item: "Cobertura", descricao: "Policarbonato", status: true },
        { item: "Iluminação", descricao: "Sensor de presença", status: false },
      ],
    },
    {
      id: "2.17",
      nome: "Vestiários",
      state: isVestiariosVisible,
      setState: setVestiariosVisible,
      items: [
        { item: "Chuveiro", descricao: "Box e ducha", status: true },
        { item: "Bancos", descricao: "Madeira tratada", status: true },
        { item: "Armários", descricao: "Aço com fechadura", status: false },
      ],
    },
  ]

  return (
    <CCard className="h-100 w-75">
      <CCardBody className="p-0">
        <CRow className="justify-content-between align-items-center m-3">
          <CRow className="d-flex align-items-center" onClick={() => navigate('/dashboard')}>
            <IoIosAddCircle className="circle-icon" />
            <p>Adicionar Ambiente</p>
          </CRow>
          <div><p>Unique Residence</p></div>
        </CRow>
        <CCol className="smooth">
          {ambientes.map((amb, index) => (
            <div key={index}>
              <div className='ambiente' href="#" onClick={() => amb.setState(!amb.state)}>
                <CRow>
                  <p>{amb.state ? "⮕" : "|"}</p>
                  <p>{amb.id} {amb.nome}</p>
                </CRow>
              </div>
              <CCollapse visible={amb.state}>
                <CTable>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {amb.items.map((it, i) => (
                      <CTableRow key={i}>
                        <CTableDataCell>{it.item}</CTableDataCell>
                        <CTableDataCell>{it.descricao}</CTableDataCell>
                        <CTableDataCell>{it.status ? <FaCheck/> : <BsXLg strokeWidth={2}/>}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCollapse>
            </div>
          ))}
        </CCol>
      </CCardBody>
    </CCard>
  )
}
