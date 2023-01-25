import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

//Import Style
import './style.css'

//Import Pages
import Home from './pages/Home/index'
import AboutKasa from './pages/A-propos'
import Rental from './pages/Logement'
import Error from './components/Error'

//Import Components
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/logement/:rentalId" element={<Rental />} />
          <Route path="/a-propos" element={<AboutKasa />} />
          <Route path="/adresse-introuvable" element={<Error />} />
          <Route
            path="*"
            element={<Navigate to="/adresse-introuvable" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
