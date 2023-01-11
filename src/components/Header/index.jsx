//Import tools
import { Link } from 'react-router-dom'

//Import Style
import '../Header/header.scss'

//Import Images
import logo from '../../assets/logo.svg'

//Component
function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Kasa" />
      <nav className="header__nav">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A propos</Link>
      </nav>
    </div>
  )
}

export default Header
