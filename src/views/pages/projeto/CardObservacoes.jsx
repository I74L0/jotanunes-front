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
        <textarea className='w-100 h-75' placeholder='Observações do projeto'></textarea>
      </CCardBody>
    </CCard>
  )
}
