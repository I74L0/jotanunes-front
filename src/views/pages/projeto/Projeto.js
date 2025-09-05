import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
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
import { AppBreadcrumb } from 'src/components/index'
import './Projeto-style.css';

const Projeto = () => {
  const navigate = useNavigate();

  return (
    <div className="body bg-body-tertiary vh-100 d-flex flex-column align-items-center">
      <CHeader position="sticky" className="d-flex vw-100 p-4" >
        <CRow className="header-row vw-100 justify-content-between align-items-center">
          <CContainer>
            <CImage src="/images/Logo Vermelha.png" alt="JotaNunes Logo" height={48} />
          </CContainer>
          <CContainer className="d-flex">
            <CRow>
              <p>Aoba</p>
              <CDropdown variant="nav-item">
                <CDropdownToggle placement="bottom-end" className="py-0 pe-0" caret={false}>
                  <CAvatar src={avatar8} size="lg" />
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                  <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
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
                  <CDropdownHeader className="bg-body-secondary fw-semibold my-2">Settings</CDropdownHeader>
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
        <CContainer className="px-4" fluid>
          <AppBreadcrumb />
        </CContainer>
      </CHeader>
    </div>
  )
}

export default Projeto