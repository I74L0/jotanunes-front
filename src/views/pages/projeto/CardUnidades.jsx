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
                <div className='ambiente' href="#" onClick={() => setSalaVisible(!isSalaVisible)}>
                <CRow>
                    <p>{isSalaVisible ? "⮕" : "|"}</p>
                    <p>1.1 Sala de Estar/ Jantar</p>
                </CRow>
                </div>
                <CCollapse visible={isSalaVisible}>
                <CTable>
                    <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                    <CTableRow>
                        <CTableDataCell>Piso</CTableDataCell>
                        <CTableDataCell>Porcelanato</CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Rodapé</CTableDataCell>
                        <CTableDataCell>Porcelanato, h-5cm</CTableDataCell>
                        <CTableDataCell><BsXLg strokeWidth={2}/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Parede</CTableDataCell>
                        <CTableDataCell>
                        Pintura PVA látex branco sobre
                        gesso ou massa de regularização PVA
                        </CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    </CTableBody>
                </CTable>
                </CCollapse>
                <div className='ambiente' href="#" onClick={() => setCirculacaoVisible(!isCirculacaoVisible)}>
                <CRow>
                    <p>{isCirculacaoVisible ? "⮕" : "|"}</p>
                    <p>1.2 Circulação</p>
                </CRow>
                </div>
                <CCollapse visible={isCirculacaoVisible}>
                <CTable>
                    <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                    <CTableRow>
                        <CTableDataCell>Piso</CTableDataCell>
                        <CTableDataCell>Porcelanato</CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Rodapé</CTableDataCell>
                        <CTableDataCell>Porcelanato, h-5cm</CTableDataCell>
                        <CTableDataCell><BsXLg strokeWidth={2}/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Parede</CTableDataCell>
                        <CTableDataCell>
                        Pintura PVA látex branco sobre
                        gesso ou massa de regularização PVA
                        </CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    </CTableBody>
                </CTable>
                </CCollapse>
                <div className='ambiente' href="#" onClick={() => setQuartoVisible(!isQuartoVisible)}>
                <CRow>
                    <p>{isQuartoVisible ? "⮕" : "|"}</p>
                    <p>1.3 Quarto e Suíte</p>
                </CRow>
                </div>
                <CCollapse visible={isQuartoVisible}>
                <CTable>
                    <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                    <CTableRow>
                        <CTableDataCell>Piso</CTableDataCell>
                        <CTableDataCell>Porcelanato</CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Rodapé</CTableDataCell>
                        <CTableDataCell>Porcelanato, h-5cm</CTableDataCell>
                        <CTableDataCell><BsXLg strokeWidth={2}/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Parede</CTableDataCell>
                        <CTableDataCell>
                        Pintura PVA látex branco sobre
                        gesso ou massa de regularização PVA
                        </CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    </CTableBody>
                </CTable>
                </CCollapse>
                <div className='ambiente' href="#" onClick={() => setSanitarioVisible(!isSanitarioVisible)}>
                <CRow>
                    <p>{isSanitarioVisible ? "⮕" : "|"}</p>
                    <p>1.4 Sanitário/Lavabo</p>
                </CRow>
                </div>
                <CCollapse visible={isSanitarioVisible}>
                <CTable>
                    <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                    <CTableRow>
                        <CTableDataCell>Piso</CTableDataCell>
                        <CTableDataCell>Porcelanato</CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Rodapé</CTableDataCell>
                        <CTableDataCell>Porcelanato, h-5cm</CTableDataCell>
                        <CTableDataCell><BsXLg strokeWidth={2}/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Parede</CTableDataCell>
                        <CTableDataCell>
                        Pintura PVA látex branco sobre
                        gesso ou massa de regularização PVA
                        </CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    </CTableBody>
                </CTable>
                </CCollapse>
                <div className='ambiente' href="#" onClick={() => setCozinhaVisible(!isCozinhaVisible)}>
                <CRow>
                    <p>{isCozinhaVisible ? "⮕" : "|"}</p>
                    <p>1.5 Cozinha/ Área de Serviço</p>
                </CRow>
                </div>
                <CCollapse visible={isCozinhaVisible}>
                <CTable>
                    <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                    <CTableRow>
                        <CTableDataCell>Piso</CTableDataCell>
                        <CTableDataCell>Porcelanato</CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Rodapé</CTableDataCell>
                        <CTableDataCell>Porcelanato, h-5cm</CTableDataCell>
                        <CTableDataCell><BsXLg strokeWidth={2}/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Parede</CTableDataCell>
                        <CTableDataCell>
                        Pintura PVA látex branco sobre
                        gesso ou massa de regularização PVA
                        </CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    </CTableBody>
                </CTable>
                </CCollapse>
                <div className='ambiente' href="#" onClick={() => setAreaTecnicaVisible(!isAreaTecnicaVisible)}>
                <CRow>
                    <p>{isAreaTecnicaVisible ? "⮕" : "|"}</p>
                    <p>1.6 Área Técnica</p>
                </CRow>
                </div>
                <CCollapse visible={isAreaTecnicaVisible}>
                <CTable>
                    <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                    <CTableRow>
                        <CTableDataCell>Piso</CTableDataCell>
                        <CTableDataCell>Porcelanato</CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Rodapé</CTableDataCell>
                        <CTableDataCell>Porcelanato, h-5cm</CTableDataCell>
                        <CTableDataCell><BsXLg strokeWidth={2}/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Parede</CTableDataCell>
                        <CTableDataCell>
                        Pintura PVA látex branco sobre
                        gesso ou massa de regularização PVA
                        </CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    </CTableBody>
                </CTable>
                </CCollapse>
                <div className='ambiente' href="#" onClick={() => setVarandaVisible(!isVarandaVisible)}>
                <CRow>
                    <p>{isVarandaVisible ? "⮕" : "|"}</p>
                    <p>1.7 Varanda</p>
                </CRow>
                </div>
                <CCollapse visible={isVarandaVisible}>
                <CTable>
                    <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                    <CTableRow>
                        <CTableDataCell>Piso</CTableDataCell>
                        <CTableDataCell>Porcelanato</CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Rodapé</CTableDataCell>
                        <CTableDataCell>Porcelanato, h-5cm</CTableDataCell>
                        <CTableDataCell><BsXLg strokeWidth={2}/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Parede</CTableDataCell>
                        <CTableDataCell>
                        Pintura PVA látex branco sobre
                        gesso ou massa de regularização PVA
                        </CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    </CTableBody>
                </CTable>
                </CCollapse>
                <div className='ambiente' href="#" onClick={() => setGardenVisible(!isGardenVisible)}>
                <CRow>
                    <p>{isGardenVisible ? "⮕" : "|"}</p>
                    <p>1.8 Garden</p>
                </CRow>
                </div>
                <CCollapse visible={isGardenVisible}>
                <CTable>
                    <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                    </CTableRow>
                    </CTableHead>
                    <CTableBody>
                    <CTableRow>
                        <CTableDataCell>Piso</CTableDataCell>
                        <CTableDataCell>Porcelanato</CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Rodapé</CTableDataCell>
                        <CTableDataCell>Porcelanato, h-5cm</CTableDataCell>
                        <CTableDataCell><BsXLg strokeWidth={2}/></CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableDataCell>Parede</CTableDataCell>
                        <CTableDataCell>
                        Pintura PVA látex branco sobre
                        gesso ou massa de regularização PVA
                        </CTableDataCell>
                        <CTableDataCell><FaCheck/></CTableDataCell>
                    </CTableRow>
                    </CTableBody>
                </CTable>
                </CCollapse>
            </CCol>
            </div>
        </CCardBody>
    </CCard>
  )
}
