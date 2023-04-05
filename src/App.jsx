import { useEffect, useState } from 'react'
import './App.css'
import Search from './Components/Search/Search'
import Card from './Components/Card/Card'

function App() {
  const [isSearch, setIsSearch] = useState(false)
  const [dataMovies, setDataMovies] = useState([])

  useEffect(() => {
    (dataMovies.length === 0) ? console.log("tiene datos") : console.log("no tiene datos")
  }, [dataMovies])
  
  return (
    <main className="App">
      <section className={`contenedor_search ${isSearch? "active_contenedor_search" : ""}`}>
        <h1 className='title'>StreamFinder</h1>
        <Search setIsSearch = {setIsSearch} setDataMovies ={setDataMovies}/>
      </section>
      {dataMovies?(
        <section className={`grid_cards ${isSearch? "active_grid_cards" : ""}`}>
          {dataMovies.map(movie => {
            console.log(movie);
            <Card key={movie.imdb_id} movie = {movie}/>})}
        </section>
      ):(<h1>HOLA</h1>)}
    </main>
  )

}

export default App
