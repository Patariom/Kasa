// //Import image
// import homeBanner from '../../assets/banner.png'

//Import Style
import './Card.scss'

//Component
function Card() {
  return (
    <div className="card">
      <img className="card__img" alt="" />
      <div className="card__background"></div>
      <h2 className="card__title">Titre de la location</h2>
    </div>
  )
}

export default Card
