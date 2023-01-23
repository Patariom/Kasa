//Import tools
import React, { useState } from 'react'

//Import image
import expandArrow from '../../assets/expand_arrow.svg'

//Component
function Collapse({ title, text, className, state }) {
  const [open, setOpen] = useState(state)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className={className}>
      <button className="collapse__title-container" onClick={toggle}>
        <h2 className="collapse__title-container__title">{title}</h2>
        <img
          className={
            !open
              ? 'collapse__title-container__icon'
              : 'collapse__title-container__icon collapse__title-container__icon--opened'
          }
          src={expandArrow}
          alt="Cliquez-ici pour dérouler le texte"
        />
      </button>
      {open && <div className="collapse__text">{text}</div>}
    </div>
  )
}

export default Collapse
