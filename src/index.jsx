import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

//Import Style
import './styles/index.css'

//Import Pages
import Home from './pages/Home/index'
import InfoAboutKasa from './pages/A-propos'
import Rental from './pages/Logement'
import Error from './components/Error'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/logement/:rentalId" element={<Rental />} />
        <Route path="/a-propos" element={<InfoAboutKasa />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
