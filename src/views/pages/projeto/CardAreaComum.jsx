import React from 'react'
import { CCard, CCardBody, CRow } from '@coreui/react'

export default function CardAreaComum() {
  return (
    <CCard className="m-4 h-100 w-75">
      <CCardBody>
        <CRow className="justify-content-between align-items-center">
          <div><p>Área Comum</p></div>
        </CRow>
        <hr />
        <p>Conteúdo da aba Área Comum.</p>
      </CCardBody>
    </CCard>
  )
}
