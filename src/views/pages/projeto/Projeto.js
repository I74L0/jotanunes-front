import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CInputGroup,
  CInputGroupText,
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
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
  CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem
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

import avatar8 from 'src/assets/images/avatars/8.jpg'
import 'src/views/pages/projeto/Projeto-style.scss'

const Projeto = () => {
  const navigate = useNavigate()

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
                    <CBadge color="info" className="ms-2">
                      42
                    </CBadge>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <CIcon icon={cilEnvelopeOpen} className="me-2" />
                    Messages
                    <CBadge color="success" className="ms-2">
                      42
                    </CBadge>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <CIcon icon={cilTask} className="me-2" />
                    Tasks
                    <CBadge color="danger" className="ms-2">
                      42
                    </CBadge>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <CIcon icon={cilCommentSquare} className="me-2" />
                    Comments
                    <CBadge color="warning" className="ms-2">
                      42
                    </CBadge>
                  </CDropdownItem>
                  <CDropdownHeader className="bg-body-secondary fw-semibold my-2">
                    Settings
                  </CDropdownHeader>
                  <CDropdownItem href="#">
                    <CIcon icon={cilUser} className="me-2" />
                    Profile
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <CIcon icon={cilSettings} className="me-2" />
                    Settings
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <CIcon icon={cilCreditCard} className="me-2" />
                    Payments
                    <CBadge color="secondary" className="ms-2">
                      42
                    </CBadge>
                  </CDropdownItem>
                  <CDropdownItem href="#">
                    <CIcon icon={cilFile} className="me-2" />
                    Projects
                    <CBadge color="primary" className="ms-2">
                      42
                    </CBadge>
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">
                    <CIcon icon={cilLockLocked} className="me-2" />
                    Lock Account
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CRow>
          </CContainer>
        </CRow>
        <hr className="vw-100" />
        <CContainer fluid>
          <CTabs defaultActiveItemKey={2} className="w-100">
            <CTabList variant="tabs" layout="justified">
              <CTab aria-controls="prefacio-tab-pane" itemKey={1}>
                Prefácio
              </CTab>
              <CTab aria-controls="unidades-tab-pane" itemKey={2}>
                Unidades Privativas
              </CTab>
              <CTab aria-controls="area-comum-tab-pane" itemKey={3}>
                Área Comum
              </CTab>
              <CTab aria-controls="observacoes-tab-pane" itemKey={4}>
                Observações
              </CTab>
            </CTabList>
            {/* <CTabContent>
              <CTabPanel className="py-3" aria-labelledby="home-tab-pane" itemKey={1}>
                Home tab content
              </CTabPanel>
              <CTabPanel className="py-3" aria-labelledby="profile-tab-pane" itemKey={2}>
                Profile tab content
              </CTabPanel>
              <CTabPanel className="py-3" aria-labelledby="contact-tab-pane" itemKey={3}>
                Contact tab content
              </CTabPanel>
              <CTabPanel className="py-3" aria-labelledby="disabled-tab-pane" itemKey={4}>
                Disabled tab content
              </CTabPanel>
            </CTabContent> */}
          </CTabs>
        </CContainer>
      </CHeader>
      <div className="background w-100 d-flex justify-content-center align-items-center flex-grow-1">
        <CCard className="m-4 h-100" style={{ width: '70%' }}>
          <CCardBody>
            <h1>Projeto</h1>
            <hr />
          </CCardBody>
        </CCard>
      </div>
    </div>
  )
}

export default Projeto
