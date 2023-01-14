//Import image
import homeBanner from '../../assets/banner.png'

//Import Style
import './Banner.scss'

//Component
function Banner() {
  return (
    <div>
      <div className="banner">
        <img className="banner__img" src={homeBanner} alt="" />
        <div className="banner__background"></div>
        <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner
