//Import tools
import { Link, NavLink } from 'react-router-dom'

//Import Images
import logo from '../../assets/logo.svg'

//Data for nav links //All new header link should be added here and in the router
const navLink = [
  { name: 'Accueil', href: '/' },
  { name: 'A Propos', href: '/a-propos' },
]

//Component
function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="Kasa" />
      </Link>
      <nav className="header__nav">
        {navLink.map((item) => (
          <NavLink
            to={item.href}
            key={item.name}
            className={({ isActive }) => {
              return isActive ? 'active-link' : ''
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
