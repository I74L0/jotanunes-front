import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CInputGroup,
  CInputGroupText,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CCollapse,
  CImage,
  CForm,
  CFormInput,
  CHeader,
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CContainer,
  CRow,
  CTab,
  CTabContent,
  CTabList,
  CTabPanel,
  CTabs,
  CHeaderText,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { IoIosAddCircle } from "react-icons/io";

import avatar8 from 'src/assets/images/avatars/8.jpg'
import 'src/views/pages/projeto/Projeto-style.scss'

const Projeto = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState(1)
  const [visible, setVisible] = useState(false)

  return (
    <div className="body bg-body-tertiary vh-100 d-flex flex-column align-items-center">
      <CHeader position="sticky" className="d-flex vw-100 p-4">
        <CRow className="header-row vw-100 justify-content-between align-items-center">
          <CContainer>
            <CImage src="/images/Logo Vermelha.png" alt="JotaNunes Logo" height={48} />
          </CContainer>
          <CContainer className="d-flex">
            <CRow>
              <CHeaderText className="text-secondary">Maria Joaquina</CHeaderText>
              <CDropdown variant="nav-item">
                <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
                  <CAvatar src={avatar8} size="lg" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">
                    Account
                  </CDropdownHeader>
                  <CDropdownItem href="#">
                    <CIcon icon={cilBell} className="me-2" />
                    Updates
                    <CBadge color="info" className="ms-2">42</CBadge>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <CIcon icon={cilEnvelopeOpen} className="me-2" />
                    Messages
                    <CBadge color="success" className="ms-2">42</CBadge>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <CIcon icon={cilTask} className="me-2" />
                    Tasks
                    <CBadge color="danger" className="ms-2">42</CBadge>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <CIcon icon={cilCommentSquare} className="me-2" />
                    Comments
                    <CBadge color="warning" className="ms-2">42</CBadge>
                  </CDropdownItem>
                  <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
                  <CDropdownItem href="#"><CIcon icon={cilUser} className="me-2" />Profile</CDropdownItem>
                  <CDropdownItem href="#"><CIcon icon={cilSettings} className="me-2" />Settings</CDropdownItem>
                  <CDropdownItem href="#"><CIcon icon={cilCreditCard} className="me-2" />Payments
                    <CBadge color="secondary" className="ms-2">42</CBadge>
                  </CDropdownItem>
                  <CDropdownItem href="#"><CIcon icon={cilFile} className="me-2" />Projects
                    <CBadge color="primary" className="ms-2">42</CBadge>
                  </CDropdownItem>
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

      <div className="background w-100 d-flex justify-content-center align-items-center flex-grow-1">
        {activeTab === 1 && (
          <CCard className="m-4 h-100 w-75">
            <CCardBody className="p-0">
              <CRow className="justify-content-between align-items-center m-3">
                <CRow className="d-flex align-items-center" onClick={() => navigate('/dashboard')}>
                  <IoIosAddCircle className="circle-icon" />
                  <p>Adicionar Prefácio</p>
                </CRow>
                <div><p>Conteúdo do Prefácio</p></div>
              </CRow>
              <div>
                <CCol>
                  <div className='temp'>
                    <p href="#" onClick={(event) => {
                        event.preventDefault()
                        setVisible(!visible)
                      }}>| 1.1 Sala de Estar/ Jantar</p>
                  </div>
                  <CCollapse visible={visible} className="mb-3">
                    <CAccordion>
                      <CAccordionItem itemKey={1}>
                        <CAccordionHeader>Detalhes da Sala de Estar/Jantar</CAccordionHeader>
                        <CAccordionBody>
                          Aqui estão os detalhes adicionais sobre a Sala de Estar/Jantar.
                        </CAccordionBody>
                      </CAccordionItem>
                    </CAccordion>
                  </CCollapse>
                  <div className='temp'>
                    <p>| 1.2 Circulação</p>
                  </div>
                  <div className='temp'>
                    <p>| 1.3 Quarto e Suíte</p>
                  </div>
                  <div className='temp'>
                    <p>| 1.4 Sanitário/Lavabo</p>
                  </div>
                  <div className='temp'>
                    <p>| 1.5 Cozinha/ Área de Serviço</p>
                  </div>
                  <div className='temp'>
                    <p>| 1.6 Área Técnica</p>
                  </div>
                  <div className='temp'>
                    <p>| 1.7 Varanda</p>
                  </div>
                  <div className='temp'>
                    <p>| 1.8 Garden</p>
                  </div>
                </CCol>
              </div>
            </CCardBody>
          </CCard>
        )}

        {activeTab === 2 && (
          <CCard className="m-4 h-100 w-75">
            <CCardBody>
              <CRow className="justify-content-between align-items-center">
                <CRow className="d-flex align-items-center" onClick={() => navigate('/dashboard')}>
                  <IoIosAddCircle className="circle-icon" />
                  <p>Adicionar Ambiente</p>
                </CRow>
                <div><p>Unique Residence</p></div>
              </CRow>
              <hr />
              <p>Lista / grid de Unidades Privativas, filtros e ações podem ficar aqui.</p>
            </CCardBody>
          </CCard>
        )}

        {activeTab === 3 && (
          <CCard className="m-4 h-100 w-75">
            <CCardBody>
              <CRow className="justify-content-between align-items-center">
                <div><p>Área Comum</p></div>
              </CRow>
              <hr />
              <p>Conteúdo da aba Área Comum.</p>
            </CCardBody>
          </CCard>
        )}

        {activeTab === 4 && (
          <CCard className="m-4 h-100 w-75">
            <CCardBody>
              <CRow className="justify-content-between align-items-center">
                <div><p>Observações</p></div>
              </CRow>
              <hr />
              <p>Conteúdo da aba Observações.</p>
            </CCardBody>
          </CCard>
        )}
      </div>
    </div>
  )
}

export default Projeto
