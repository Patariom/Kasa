//Component
function Banner({ title, picture }) {
  return (
    <div>
      <div className="banner">
        <img className="banner__img" src={picture} alt="" />
        <h1 className="banner__title">{title}</h1>
      </div>
    </div>
  )
}

export default Banner
