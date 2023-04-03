import movie from '../../data/movie.json'
import './Card.css'
function Card({movieTitle}) {
  return (
    <div className='card_container'>
        <h3>{movieTitle}</h3>
        <img src={movie.image_url} />
    </div>
  )
}

export default Card