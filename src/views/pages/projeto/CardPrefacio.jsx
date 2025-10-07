import React, { useState } from 'react'
import { CCard, CCardBody, CRow } from '@coreui/react'
import { IoIosAddCircle } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

export default function CardPrefacio() {

  const [prefacio, setPrefacio] = useState({
    nome: "",
    estado: "",
    cidade: "",
    texto: "",
  })

  return (
    <CCard className="m-4 h-100 w-75">
      <CCardBody>
        <div className="prefacio-wrapper">
          <h5 className="mb-3">Prefácio</h5>

          <div className="prefacio-linha">
            <label className="prefacio-label">
              Nome:
              <input
                type="text"
                className="prefacio-input"
                value={prefacio.nome}
                onChange={(e) => setPrefacio({ ...prefacio, nome: e.target.value })}
              />
            </label>

            <label className="prefacio-label">
              Estado:
              <input
                type="text"
                className="prefacio-input"
                value={prefacio.estado}
                onChange={(e) => setPrefacio({ ...prefacio, estado: e.target.value })}
              />
            </label>

            <label className="prefacio-label">
              Cidade:
              <input
                type="text"
                className="prefacio-input"
                value={prefacio.cidade}
                onChange={(e) => setPrefacio({ ...prefacio, cidade: e.target.value })}
              />
            </label>
          </div>

          <textarea
            className="prefacio-textarea"
            placeholder="Escreva o prefácio aqui..."
            value={prefacio.texto}
            onChange={(e) => setPrefacio({ ...prefacio, texto: e.target.value })}
          />
        </div>
      </CCardBody>
    </CCard>
  )
}
