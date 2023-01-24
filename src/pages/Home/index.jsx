//Import Components
import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import Card from '../../components/Card'

//Import image
import homeBanner from '../../assets/banner_home.png'

//Import Data
import rentalList from '../../data/logements.json'

//Component
function Home() {
  return (
    <div>
      <Banner
        picture={homeBanner}
        title="Chez vous, partout et ailleurs"
        className="banner"
      />
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
