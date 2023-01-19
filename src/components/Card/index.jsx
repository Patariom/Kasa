//Component
function Card({ title, picture }) {
  return (
    <div className="card">
      <img className="card__img" src={picture} alt="" />
      <h2 className="card__title"> {title} </h2>
    </div>
  )
}

export default Card
