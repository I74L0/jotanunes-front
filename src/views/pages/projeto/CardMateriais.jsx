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
import { useNavigate } from 'react-router-dom'

export default function CardMaterias() {
  const navigate = useNavigate()

  const [material, setMaterial] = useState(
    [
      {
        id: "1",
        nome: "Cerâmica",
        marcas: [
          "Incesa", "Portobello", "Arielle", "Tecnogres", "Pamesa",
          "Camelo Fior", "Biancogrês", "Pointer"
        ]
      },
      {
        id: "2",
        nome: "Porcelanato",
        marcas: [
          "Portobello", "Arielle", "Tecnogres", "Pamesa", "Biancogrês",
          "Elizabeth", "Ceusa", "Pointer", "Villagres"
        ]
      },
      {
        id: "3",
        nome: "Laminado",
        marcas: [
          "Eucatex", "Durafloor ou Espaçofloor"
        ]
      },
      {
        id: "4",
        nome: "Esquadria",
        marcas: [
          "Esaf", "Alumasa", "Atlantica", "Ramassol ou Unicasa"
        ]
      },
      {
        id: "5",
        nome: "Ferragem",
        marcas: [
          "Silvana", "Stam", "Arouca", "Soprano", "Aliança", "Imab"
        ]
      },
      {
        id: "6",
        nome: "Instalação Elétrica",
        marcas: [
          "Alumbra", "Steck", "Ilumi", "Schneider", "Margirius ou Fame"
        ]
      },
      {
        id: "7",
        nome: "Metal Sanitário",
        marcas: [
          "Forusi", "Deca", "Celite", "Fabrimar ou Docol"
        ]
      },
    ]
  )

  return (
    <CCard className="h-100 w-75">
      <CCardBody className="p-0">
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
            {material.map((linha, i) => (
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
  )
}
