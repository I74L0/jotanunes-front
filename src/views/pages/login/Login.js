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
import './Login-style.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Sua lógica de autenticação aqui (e.g., chamada à API)
    const isLoginSuccessful = true; // Simulação de login bem-sucedido

    if (isLoginSuccessful) {
      // Atualizar o estado de autenticação (e.g., salvar token no localStorage)
      localStorage.setItem('token', 'seuTokenAqui'); 
      navigate('/dashboard'); 
    } else {
      // Lidar com o login com falha
      alert('Login inválido!');
    }
  };
  return (
    <div className="body bg-body-tertiary vh-100 d-flex flex-column align-items-center">
      <CHeader position="sticky" className="d-flex vw-100 p-4" >
        <CImage src="/images/Logo Vermelha.png" alt="JotaNunes Logo" height={48} />
      </CHeader>
      <div className='background fg-1 d-flex align-items-center vw-100'>
        <CCol className='col-image'>
          <CImage src="images/JOTANUNES-PEROLAS-DO-MAR.jpg" height={1080} width={1980} alt="JotaNunes Logo"/>
          {/* <CImage src="images/FLOR-DE-LOTUS-EXT-GUARITA.jpg" height={800} width={800} alt="JotaNunes Logo"/> */}
        </CCol>
        <CCol className="d-flex justify-content-center align-items-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <hr/>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow className='row-login'>
                      <CButton color="primary" className="btn-login px-4" type='submit'>
                        Login
                      </CButton>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CCol>
      </div>
    </div>
  )
}

export default Login
