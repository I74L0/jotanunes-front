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
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import './Projeto-style.css';

const Projeto = () => {
  const navigate = useNavigate();

  return (
    <div className="body bg-body-tertiary vh-100 d-flex flex-column align-items-center">
      <CHeader position="sticky" className="d-flex vw-100 p-4" >
        <CImage src="/images/Logo Vermelha.png" alt="JotaNunes Logo" height={48} />
      </CHeader>
      </div>
  )
}

export default Projeto