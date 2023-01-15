//Import Components
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

//Import Data
import rentalList from '../../data/logements.json'

//Import Style
import './Home.scss'

//Component
function Home() {
  return (
    <div>
      <Banner />
      <section className="rental-section">
        <div className="rental-section__cards-container">
          {rentalList.map((rental) => (
            <Link to={`/logement/${rental.id}`} key={rental.id}>
              <Card picture={rental.cover} title={rental.title} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
