import './Card.css'

function Card({movie}) {
  return (
    <div className='card_container'>
        <h3>{movie.title}</h3>
        <img src={movie.image_url} />
    </div>
  )
}

export default Card