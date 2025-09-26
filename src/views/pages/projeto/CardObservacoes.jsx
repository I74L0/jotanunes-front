import React from 'react'
import { CCard, CCardBody, CRow } from '@coreui/react'

export default function CardObservacoes() {
  return (
    <CCard className="m-4 h-100 w-75">
      <CCardBody>
        <CRow className="justify-content-between align-items-center">
          <div><p>Observações</p></div>
        </CRow>
        <hr />
        <p>Conteúdo da aba Observações.</p>
      </CCardBody>
    </CCard>
  )
}
