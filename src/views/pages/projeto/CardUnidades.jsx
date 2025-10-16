import {
  CButton,
  CCard,
  CCardBody,
  CCollapse,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { IoIosAddCircle } from 'react-icons/io'

export default function CardUnidades({ ambientes, setAmbientes }) {

  const adicionarAmbiente = () => {
    const novo = { nome: `Novo Ambiente ${ambientes.length + 1}`, editando: true, aberto: true, linhas: [] }
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
    novos[idx].linhas.push({ item: '', descricao: '' })
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
    <CCard className="h-100 w-75">
      <CCardBody className="p-0">
        <>
          <CRow className="justify-content-between align-items-center mb-2 mt-3">
            <div
              className="d-flex align-items-center add-ambiente"
              onClick={adicionarAmbiente}
              style={{ cursor: 'pointer' }}
            >
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
      </CCardBody>
    </CCard>
  )
}