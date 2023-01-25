//Import Images
import logoWhite from '../../assets/logo_white.svg'

//Component
function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logoWhite} alt="Kasa" />
      <p className="footer__disclaimer">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
