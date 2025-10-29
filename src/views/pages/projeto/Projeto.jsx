import { useState, useEffect } from 'react'
import {
  CImage,
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
  CHeaderText,
  CButton,
  useColorModes
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
  cilUser
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import CardPrefacio from './CardPrefacio'
import CardUnidades from './CardUnidades'
import CardAreaComum from './CardAreaComum'
import CardMateriais from './CardMateriais'
import CardObservacoes from './CardObservacoes'
import MenuTabs from './MenuTabs'
import avatar8 from 'src/assets/images/avatars/8.jpg'
import 'src/views/pages/projeto/Projeto-style.scss'
import * as api from 'src/api'

const Projeto = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  
  const [activeTab, setActiveTab] = useState(0)
  const [prefacioData, setPrefacioData] = useState({ nome: '', estado: '', cidade: '', texto: '' });
  const [unidadesData, setUnidadesData] = useState([]);
  const [areacomumData, setAreacomumData] = useState([]);
  const [materialData, setMaterialData] = useState([]);
  const [observacoesData, setObservacoesData] = useState([]);

  useEffect(() => {
    api.getDados().then(d => {
      setPrefacioData(d.prefacioData)
      setUnidadesData(d.unidadesData)
      setAreacomumData(d.areacomumData)
      setMaterialData(d.materialData)
      setObservacoesData(d.observacoesData)
    })
  }, [])

  return (
    <div className="body bg-body-tertiary vh-100 d-flex flex-column align-items-center">
      <CHeader position="sticky" className="d-flex w-100 p-4 pb-0" onLoad={() => setColorMode('light')}>
        <CRow className="header-row w-100 justify-content-between align-items-center">
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
                  <CDropdownHeader className="bg-body-secondary fw-semibold mb-2">Account</CDropdownHeader>
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
        <hr className="w-100" />
        <CRow className="div-tabs w-100">
          <MenuTabs activeIndex={activeTab} onChange={setActiveTab} />
          <CButton className="btn-salvar">Salvar</CButton>
        </CRow>
      </CHeader>

      <div className="background w-100 d-flex justify-content-center align-items-center flex-grow-1">
        {activeTab === 0 && <CardPrefacio prefacio={prefacioData} setPrefacio={setPrefacioData} />}
        {activeTab === 1 && <CardUnidades ambientes={unidadesData} setAmbientes={setUnidadesData} />}
        {activeTab === 2 && <CardAreaComum ambientes={areacomumData} setAmbientes={setAreacomumData} />}
        {activeTab === 3 && <CardMateriais materiais={materialData} setMateriais={setMaterialData} />}
        {activeTab === 4 && <CardObservacoes observacoes={observacoesData} setObservacoes={setObservacoesData} />}
      </div>
    </div>
  )
}

export default Projeto
