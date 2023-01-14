//Import COmponents
import Banner from '../../components/Banner'
import Card from '../../components/Card'

//Import Style
import './Home.scss'

//Component
function Home() {
  return (
    <div>
      <Banner />
      <div className="cards-container">
        <Card />
      </div>
    </div>
  )
}

export default Home
