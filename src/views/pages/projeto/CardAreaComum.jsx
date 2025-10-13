import { useState } from 'react'
import {
  CButton,
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

export default function CardAreaComum() {
  const [ambientes, setAmbientes] = useState(
    [
      {
        id: "1.",
        nome: "Guarita",
        editando: false,
        aberto: false,
        items: [
          { item: "Piso", descricao: "Porcelanato", status: true },
          { item: "Rodapé", descricao: "Porcelanato, h-5cm", status: false },
          { item: "Parede", descricao: "Pintura PVA látex branco sobre gesso ou massa de regularização PVA", status: true },
        ],
      },
      {
        id: "2.",
        nome: "Salão de Festas Gourmet",
        editando: false,
        aberto: false,
        items: [
          { item: "Piso", descricao: "Porcelanato", status: true },
          { item: "Rodapé", descricao: "Porcelanato, h-5cm", status: false },
          { item: "Parede", descricao: "Pintura PVA látex branco", status: true },
          { item: "Cozinha", descricao: "Bancada em granito", status: true },
        ],
      },
      {
        id: "3.",
        nome: "Quiosques",
        editando: false,
        aberto: false,
        items: [
          { item: "Churrasqueira", descricao: "Aço inox", status: true },
          { item: "Pia", descricao: "Granito com cuba dupla", status: true },
          { item: "Lixeira", descricao: "Coletora de recicláveis", status: false },
        ],
      },
      {
        id: "4.",
        nome: "Copa Funcionários",
        editando: false,
        aberto: false,
        items: [
          { item: "Pia", descricao: "Aço inox com torneira", status: true },
          { item: "Armário", descricao: "MDF com acabamento", status: false },
          { item: "Geladeira", descricao: "Capacidade 300L", status: true },
        ],
      },
      {
        id: "5.",
        nome: "Salão de Festas",
        editando: false,
        aberto: false,
        items: [
          { item: "Piso", descricao: "Vinílico", status: true },
          { item: "Iluminação", descricao: "LED embutido", status: true },
          { item: "Portas", descricao: "Estandart em madeira", status: false },
        ],
      },
      {
        id: "6.",
        nome: "Brinquedoteca",
        editando: false,
        aberto: false,
        items: [
          { item: "Piso", descricao: "Emborrachado", status: true },
          { item: "Brinquedos", descricao: "Aprovados INMETRO", status: true },
          { item: "Segurança", descricao: "Proteções nas tomadas", status: true },
        ],
      },
      {
        id: "7.",
        nome: "Playground",
        editando: false,
        aberto: false,
        items: [
          { item: "Piso", descricao: "Emborrachado externo", status: true },
          { item: "Estrutura", descricao: "Metálica com pintura", status: false },
          { item: "Cercas", descricao: "Proteção perimetral", status: true },
        ],
      },
      {
        id: "8.",
        nome: "Piscina Adulto",
        editando: false,
        aberto: false,
        items: [
          { item: "Tratamento", descricao: "Cloração automática", status: true },
          { item: "Bombeamento", descricao: "Bomba 2HP", status: true },
          { item: "Degraus", descricao: "Antiaderente", status: false },
        ],
      },
      {
        id: "9.",
        nome: "Piscina Infantil",
        editando: false,
        aberto: false,
        items: [
          { item: "Profundidade", descricao: "0.6 m", status: true },
          { item: "Brinquedos", descricao: "Acessórios lúdicos", status: false },
          { item: "Tratamento", descricao: "Filtragem diária", status: true },
        ],
      },
      {
        id: "10.",
        nome: "Solarium",
        editando: false,
        aberto: false,
        items: [
          { item: "Deck", descricao: "Madeira tratada", status: true },
          { item: "Espreguiçadeiras", descricao: "Em sintético", status: false },
          { item: "Guarda-sol", descricao: "Estrutura metálica", status: true },
        ],
      },
      {
        id: "11.",
        nome: "Deck Molhado",
        editando: false,
        aberto: false,
        items: [
          { item: "Revestimento", descricao: "Antiderrapante", status: true },
          { item: "Dreno", descricao: "Sistema linear", status: true },
          { item: "Corrimão", descricao: "Inox", status: false },
        ],
      },
      {
        id: "12.",
        nome: "Sauna",
        editando: false,
        aberto: false,
        items: [
          { item: "Forno", descricao: "Elétrico 6kW", status: true },
          { item: "Revestimento", descricao: "Madeira nobre", status: true },
          { item: "Ventilação", descricao: "Exaustor", status: false },
        ],
      },
      {
        id: "13.",
        nome: "Academia",
        editando: false,
        aberto: false,
        items: [
          { item: "Equipamentos", descricao: "Esteira, bike, pesos", status: true },
          { item: "Piso", descricao: "Borracha técnica", status: true },
          { item: "Ar-condicionado", descricao: "Split 18.000 BTU", status: false },
        ],
      },
      {
        id: "14.",
        nome: "Quadra Poliesportiva",
        editando: false,
        aberto: false,
        items: [
          { item: "Piso", descricao: "Poliuretano", status: true },
          { item: "Iluminação", descricao: "Holofotes 500W", status: false },
          { item: "Rede", descricao: "Voleibol/Futebol", status: true },
        ],
      },
      {
        id: "15.",
        nome: "Espaço Pet",
        editando: false,
        aberto: false,
        items: [
          { item: "Piso", descricao: "Ladrilho técnico", status: true },
          { item: "Bebedouro", descricao: "Automático", status: false },
          { item: "Cerca", descricao: "Proteção perimetral", status: true },
        ],
      },
      {
        id: "16.",
        nome: "Bicicletário",
        editando: false,
        aberto: false,
        items: [
          { item: "Suporte", descricao: "Capacidade 20 bikes", status: true },
          { item: "Cobertura", descricao: "Policarbonato", status: true },
          { item: "Iluminação", descricao: "Sensor de presença", status: false },
        ],
      },
      {
        id: "17.",
        nome: "Vestiários",
        editando: false,
        aberto: false,
        items: [
          { item: "Chuveiro", descricao: "Box e ducha", status: true },
          { item: "Bancos", descricao: "Madeira tratada", status: true },
          { item: "Armários", descricao: "Aço com fechadura", status: false },
        ],
      },
    ]
  )

  const adicionarAmbiente = () => {
    const novoId = `${ambientes.length + 1}`
    const novo = { id: novoId, nome: `Novo Ambiente`, editando: true, aberto: true, items: [] }
    setAmbientes([...ambientes, novo])
  }

  const atualizarNome = (idx, valor) => {
    const novos = [...ambientes]
    novos[idx].nome = valor
    setAmbientes(novos)
  }

  const finalizarEdicao = (idx) => {
    const novos = [...ambientes]
    novos[idx].editando = false
    setAmbientes(novos)
  }

  const removerAmbiente = (idx) => {
    setAmbientes(ambientes.filter((_, i) => i !== idx))
  }

  const toggleCollapse = (idx) => {
    const novos = [...ambientes]
    novos[idx].aberto = !novos[idx].aberto
    setAmbientes(novos)
  }

  const adicionarLinha = (idx) => {
    const novos = [...ambientes]
    novos[idx].items.push({ item: "", descricao: "", status: false })
    setAmbientes(novos)
  }

  const atualizarLinha = (idxAmb, idxLinha, campo, valor) => {
    const novos = [...ambientes]
    novos[idxAmb].items[idxLinha][campo] = valor
    setAmbientes(novos)
  }
  
  const toggleStatus = (idxAmb, idxLinha) => {
    const novos = [...ambientes]
    novos[idxAmb].items[idxLinha].status = !novos[idxAmb].items[idxLinha].status
    setAmbientes(novos)
  }

  const removerLinha = (idxAmb, idxLinha) => {
    const novos = [...ambientes]
    novos[idxAmb].items.splice(idxLinha, 1)
    setAmbientes(novos)
  }

  return (
    <CCard className="h-100 w-75">
      <CCardBody className="p-0">
        <>
          <CRow className="justify-content-between align-items-center mb-2 mt-3">
            <div className="d-flex align-items-center add-ambiente" onClick={adicionarAmbiente} style={{cursor: 'pointer', width: 'auto'}}>
              <IoIosAddCircle className="circle-icon" />
              <span className="ms-2">Adicionar Ambiente</span>
            </div>
          </CRow>
          <hr />
          <div className="lista-ambientes">
            {ambientes.map((amb, idx) => (
              <div key={idx}>
                <CRow
                  className="linha-ambiente justify-content-between align-items-center"
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleCollapse(idx)}
                >
                  <div className="nome-wrapper">
                    {amb.editando ? (
                      <input
                        type="text"
                        className="inline-input"
                        autoFocus
                        value={amb.nome}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => atualizarNome(idx, e.target.value)}
                        onBlur={() => finalizarEdicao(idx)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') finalizarEdicao(idx)
                        }}
                      />
                    ) : (
                      <span className="nome-ambiente" onClick={(e) => {
                          e.stopPropagation()
                          const novos = [...ambientes]
                          novos[idx].editando = true
                          setAmbientes(novos)
                      }}>
                        {`${amb.id} ${amb.nome}`}
                      </span>
                    )}
                  </div>

                  <div className="acao-remover">
                    <CButton
                      color="danger"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation()
                        removerAmbiente(idx)
                      }}
                    >
                      Remover Ambiente
                    </CButton>
                  </div>
                </CRow>

                <CCollapse visible={amb.aberto}>
                  <CCard className="mt-2 mb-3">
                    <CCardBody>
                      <CTable bordered>
                        <CTableHead>
                          <CTableRow>
                            <CTableHeaderCell>Item</CTableHeaderCell>
                            <CTableHeaderCell>Descrição</CTableHeaderCell>
                            <CTableHeaderCell>Status</CTableHeaderCell>
                            <CTableHeaderCell>Ações</CTableHeaderCell>
                          </CTableRow>
                        </CTableHead>
                        <CTableBody>
                          {amb.items.map((linha, i) => (
                            <CTableRow key={i}>
                              <CTableDataCell>
                                <textarea
                                  className="auto-expand"
                                  rows="1"
                                  value={linha.item}
                                  onChange={(e) =>
                                    atualizarLinha(idx, i, 'item', e.target.value)
                                  }
                                />
                              </CTableDataCell>
                              <CTableDataCell>
                                <textarea
                                  className="auto-expand"
                                  rows="1"
                                  value={linha.descricao}
                                  onChange={(e) =>
                                    atualizarLinha(idx, i, 'descricao', e.target.value)
                                  }
                                />
                              </CTableDataCell>
                              <CTableDataCell style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => toggleStatus(idx, i)}>
                                {linha.status ? <FaCheck color="green" /> : <BsXLg color="red" strokeWidth={1}/>}
                              </CTableDataCell>
                              <CTableDataCell>
                                <CButton
                                  color="danger"
                                  size="sm"
                                  onClick={() => removerLinha(idx, i)}
                                >
                                  Remover
                                </CButton>
                              </CTableDataCell>
                            </CTableRow>
                          ))}
                          <CTableRow>
                            <CTableDataCell colSpan={4}>
                              <CButton
                                color="success"
                                size="sm"
                                onClick={() => adicionarLinha(idx)}
                              >
                                + Adicionar Linha
                              </CButton>
                            </CTableDataCell>
                          </CTableRow>
                        </CTableBody>
                      </CTable>
                    </CCardBody>
                  </CCard>
                </CCollapse>
              </div>
            ))}
          </div>
        </>
      </CCardBody>
    </CCard>
  )
}