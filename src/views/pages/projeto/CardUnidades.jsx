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
  const [isSalaVisible, setSalaVisible] = useState(false)
  const [isCirculacaoVisible, setCirculacaoVisible] = useState(false)
  const [isQuartoVisible, setQuartoVisible] = useState(false)
  const [isSanitarioVisible, setSanitarioVisible] = useState(false)
  const [isCozinhaVisible, setCozinhaVisible] = useState(false)
  const [isAreaTecnicaVisible, setAreaTecnicaVisible] = useState(false)
  const [isVarandaVisible, setVarandaVisible] = useState(false)
  const [isGardenVisible, setGardenVisible] = useState(false)

  const ambientes = [
    {
      id: "1.1",
      nome: "Sala de Estar/ Jantar",
      state: isSalaVisible,
      setState: setSalaVisible,
      items: [
        { item: "Piso", descricao: "Porcelanato", status: true },
        { item: "Rodapé", descricao: "Porcelanato, h-5cm", status: false },
        { item: "Parede", descricao: "Pintura PVA látex branco sobre gesso ou massa de regularização PVA", status: true },
      ],
    },
    {
      id: "1.2",
      nome: "Circulação",
      state: isCirculacaoVisible,
      setState: setCirculacaoVisible,
      items: [
        { item: "Piso", descricao: "Porcelanato", status: true },
        { item: "Rodapé", descricao: "Porcelanato, h-5cm", status: false },
        { item: "Parede", descricao: "Pintura PVA látex branco sobre gesso ou massa de regularização PVA", status: true },
      ],
    },
    {
      id: "1.3",
      nome: "Quarto e Suíte",
      state: isQuartoVisible,
      setState: setQuartoVisible,
      items: [
        { item: "Piso", descricao: "Porcelanato", status: true },
        { item: "Rodapé", descricao: "Porcelanato, h-5cm", status: false },
        { item: "Parede", descricao: "Pintura PVA látex branco sobre gesso ou massa de regularização PVA", status: true },
      ],
    },
    {
      id: "1.4",
      nome: "Sanitário/Lavabo",
      state: isSanitarioVisible,
      setState: setSanitarioVisible,
      items: [
        { item: "Piso", descricao: "Porcelanato", status: true },
        { item: "Louças", descricao: "Vaso e pia conforme especificação", status: true },
        { item: "Revestimento", descricao: "Azulejo até 2m", status: false },
      ],
    },
    {
      id: "1.5",
      nome: "Cozinha/ Área de Serviço",
      state: isCozinhaVisible,
      setState: setCozinhaVisible,
      items: [
        { item: "Piso", descricao: "Porcelanato", status: true },
        { item: "Rodapé", descricao: "Porcelanato, h-5cm", status: false },
        { item: "Pia", descricao: "Bancada em granito", status: true },
      ],
    },
    {
      id: "1.6",
      nome: "Área Técnica",
      state: isAreaTecnicaVisible,
      setState: setAreaTecnicaVisible,
      items: [
        { item: "Acesso", descricao: "Porta técnica", status: true },
        { item: "Piso", descricao: "Cimentado", status: true },
        { item: "Instalações", descricao: "Pontos elétricos e hidráulicos", status: false },
      ],
    },
    {
      id: "1.7",
      nome: "Varanda",
      state: isVarandaVisible,
      setState: setVarandaVisible,
      items: [
        { item: "Revestimento", descricao: "Porcelanato externo", status: true },
        { item: "Guarda-corpo", descricao: "Vidro temperado", status: true },
        { item: "Drenagem", descricao: "Sistema linear", status: false },
      ],
    },
    {
      id: "1.8",
      nome: "Garden",
      state: isGardenVisible,
      setState: setGardenVisible,
      items: [
        { item: "Piso", descricao: "Deck e piso drenante", status: true },
        { item: "Vegetação", descricao: "Plantio especificado em projeto", status: false },
        { item: "Irrigação", descricao: "Sistema automático", status: true },
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
        <div>
          <CCol>
            {ambientes.map((amb, idx) => (
              <div key={idx}>
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
        </div>
      </CCardBody>
    </CCard>
  )
}