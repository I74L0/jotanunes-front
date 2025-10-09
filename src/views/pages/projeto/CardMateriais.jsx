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

export default function CardMaterias() {
  const navigate = useNavigate()

  return (
    <CCard className="h-100 w-75">
      <CCardBody className="p-0">
            <CTable>
                <CTableHead>
                <CTableRow>
                    <CTableHeaderCell scope="col">Item</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Descrição</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow key="a">
                    <CTableDataCell>a</CTableDataCell>
                    <CTableDataCell>a</CTableDataCell>
                    <CTableDataCell>a</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
      </CCardBody>
    </CCard>
  )
}
