import React from 'react'
import { CCard, CCardBody, CRow } from '@coreui/react'
import { IoIosAddCircle } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export default function CardPrefacio() {
  const navigate = useNavigate()
  return (
    <CCard className="m-4 h-100 w-75">
      <CCardBody>
        <CRow className="justify-content-between align-items-center">
          <CRow className="d-flex align-items-center" onClick={() => navigate('/dashboard')}>
            <IoIosAddCircle className="circle-icon" />
            <p>Adicionar Prefácio</p>
          </CRow>
          <div><p>Conteúdo do Prefácio</p></div>
        </CRow>
        <hr />
        <p>Aqui vai o conteúdo específico da aba "Prefácio".</p>
      </CCardBody>
    </CCard>
  )
}
