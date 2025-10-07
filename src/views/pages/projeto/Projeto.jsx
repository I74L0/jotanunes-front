import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CRow,
  CImage,
  CHeader,
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CTabs,
  CTabList,
  CTab,
  CCollapse,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilEnvelopeOpen,
  cilLockLocked,
  cilTask,
} from '@coreui/icons'
import { IoIosAddCircle } from "react-icons/io"

import avatar8 from 'src/assets/images/avatars/8.jpg'
import 'src/views/pages/projeto/Projeto-style.scss'

const Projeto = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(2)

  // 🔹 Prefácio como objeto
  const [prefacio, setPrefacio] = useState({
    nome: "",
    estado: "",
    cidade: "",
    texto: "",
  })

  const [ambientes, setAmbientes] = useState([
    { nome: "Sala de Estar/ Jantar", editando: false, aberto: false, linhas: [] },
    { nome: "Circulação", editando: false, aberto: false, linhas: [] },
    { nome: "Quarto e Suíte", editando: false, aberto: false, linhas: [] },
    { nome: "Sanitário/ Lavabo", editando: false, aberto: false, linhas: [] },
    { nome: "Cozinha/ Área de Serviço", editando: false, aberto: false, linhas: [] },
    { nome: "Área Técnica", editando: false, aberto: false, linhas: [] },
    { nome: "Varanda", editando: false, aberto: false, linhas: [] },
    { nome: "Garden", editando: false, aberto: false, linhas: [] }
  ])

  const adicionarAmbiente = () => {
    const novo = { nome: `Novo Ambiente ${ambientes.length + 1}`, editando: true, aberto: true, linhas: [] }
    setAmbientes([...ambientes, novo])
    setActiveTab(2)
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
    novos[idx].linhas.push({ item: "", descricao: "" })
    setAmbientes(novos)
  }

  const atualizarLinha = (idxAmb, idxLinha, campo, valor) => {
    const novos = [...ambientes]
    novos[idxAmb].linhas[idxLinha][campo] = valor
    setAmbientes(novos)
  }

  const removerLinha = (idxAmb, idxLinha) => {
    const novos = [...ambientes]
    novos[idxAmb].linhas.splice(idxLinha, 1)
    setAmbientes(novos)
  }

  return (
    <div className="body bg-body-tertiary vh-100 d-flex flex-column align-items-center">
      <CHeader position="sticky" className="d-flex vw-100 p-4">
        <CRow className="header-row vw-100 justify-content-between align-items-center">
          <CContainer>
            <CImage src="/images/Logo Vermelha.png" alt="JotaNunes Logo" height={48} />
          </CContainer>

          <CContainer className="d-flex">
            <CRow>
              <div className="me-3">Usuário</div>
              <CDropdown variant="nav-item">
                <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
                  <CAvatar src={avatar8} size="lg" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
                  <CDropdownItem href="#"><CIcon icon={cilBell} className="me-2" />Updates <CBadge color="info" className="ms-2">42</CBadge></CDropdownItem>
                  <CDropdownItem href="#"><CIcon icon={cilEnvelopeOpen} className="me-2" />Messages <CBadge color="success" className="ms-2">42</CBadge></CDropdownItem>
                  <CDropdownItem href="#"><CIcon icon={cilTask} className="me-2" />Tasks <CBadge color="danger" className="ms-2">42</CBadge></CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#"><CIcon icon={cilLockLocked} className="me-2" />Lock Account</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CRow>
          </CContainer>
        </CRow>

        <hr className="vw-100" />
        <CContainer fluid>
          <CTabs activeItemKey={activeTab} className="w-100">
            <CTabList variant="tabs" layout="justified">
              <CTab itemKey={1} onClick={() => setActiveTab(1)}>Prefácio</CTab>
              <CTab itemKey={2} onClick={() => setActiveTab(2)}>Unidades Privativas</CTab>
              <CTab itemKey={3} onClick={() => setActiveTab(3)}>Área Comum</CTab>
              <CTab itemKey={4} onClick={() => setActiveTab(4)}>Observações</CTab>
            </CTabList>
          </CTabs>
        </CContainer>
      </CHeader>

      <div className="background w-100 d-flex justify-content-center align-items-start flex-grow-1 py-4">
        <CCard className="m-4 h-100 w-75">
          <CCardBody>
            {activeTab === 1 && (
              <div className="prefacio-wrapper">
                <h5 className="mb-3">Prefácio</h5>

                <div className="prefacio-linha">
                  <label className="prefacio-label">
                    Nome:
                    <input
                      type="text"
                      className="prefacio-input"
                      value={prefacio.nome}
                      onChange={(e) => setPrefacio({ ...prefacio, nome: e.target.value })}
                    />
                  </label>

                  <label className="prefacio-label">
                    Estado:
                    <input
                      type="text"
                      className="prefacio-input"
                      value={prefacio.estado}
                      onChange={(e) => setPrefacio({ ...prefacio, estado: e.target.value })}
                    />
                  </label>

                  <label className="prefacio-label">
                    Cidade:
                    <input
                      type="text"
                      className="prefacio-input"
                      value={prefacio.cidade}
                      onChange={(e) => setPrefacio({ ...prefacio, cidade: e.target.value })}
                    />
                  </label>
                </div>

                <textarea
                  className="prefacio-textarea"
                  placeholder="Escreva o prefácio aqui..."
                  value={prefacio.texto}
                  onChange={(e) => setPrefacio({ ...prefacio, texto: e.target.value })}
                />
              </div>
            )}

            {activeTab === 2 && (
              <>
                <CRow className="justify-content-between align-items-center mb-2">
                  <div className="d-flex align-items-center add-ambiente" onClick={adicionarAmbiente} style={{cursor: 'pointer'}}>
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
                              onChange={(e) => atualizarNome(idx, e.target.value)}
                              onBlur={() => finalizarEdicao(idx)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') finalizarEdicao(idx)
                              }}
                            />
                          ) : (
                            <span className="nome-ambiente">{`${idx + 1}. ${amb.nome}`}</span>
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

                      {/* Collapse da tabela */}
                      <CCollapse visible={amb.aberto}>
                        <CCard className="mt-2 mb-3">
                          <CCardBody>
                            <CTable bordered>
                              <CTableHead>
                                <CTableRow>
                                  <CTableHeaderCell>Item</CTableHeaderCell>
                                  <CTableHeaderCell>Descrição</CTableHeaderCell>
                                  <CTableHeaderCell>Ações</CTableHeaderCell>
                                </CTableRow>
                              </CTableHead>
                              <CTableBody>
                                {amb.linhas.map((linha, i) => (
                                  <CTableRow key={i}>
                                    <CTableDataCell>
                                      <textarea
                                        className="auto-expand"
                                        rows="1"
                                        value={linha.item}
                                        onChange={(e) =>
                                          atualizarLinha(idx, i, 'item', e.target.value)
                                        }
                                        onInput={(e) => {
                                          e.target.style.height = 'auto'
                                          e.target.style.height = e.target.scrollHeight + 'px'
                                        }}
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
                                        onInput={(e) => {
                                          e.target.style.height = 'auto'
                                          e.target.style.height = e.target.scrollHeight + 'px'
                                        }}
                                      />
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
                                  <CTableDataCell colSpan={3}>
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
            )}

            {activeTab !== 1 && activeTab !== 2 && (
              <div className="text-center py-5">
                <h5>Conteúdo em construção</h5>
              </div>
            )}
          </CCardBody>
        </CCard>
      </div>
    </div>
  )
}

export default Projeto
