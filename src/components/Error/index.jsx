//Import tools
import { Link } from 'react-router-dom'

//Import style
import './Error.scss'

function Error() {
  return (
    <div className="error">
      <h1 className="error__title">404</h1>
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">
        <p className="active-link">Retourner sur la page d’accueil</p>
      </Link>
    </div>
  )
}

export default Error
