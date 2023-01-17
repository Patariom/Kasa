//Import tools
import React, { useState } from 'react'

//Import Style
import './Collapse.scss'

//Import image
import expandArrow from '../../assets/expand_arrow.png'

//Component
function Collapse({ title, text }) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className="collapse">
      <button className="collapse__title-container" onClick={toggle}>
        <h2 className="collapse__title-container__title">{title}</h2>
        <img src={expandArrow} alt="Cliquez-ici pour dérouler le texte" />
      </button>
      {open && <div className="collapse__text">{text}</div>}
    </div>
  )
}

export default Collapse
