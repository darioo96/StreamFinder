import { useState } from 'react'
import './App.css'
import Search from './Components/Search/Search'
import Card from './Components/Card/Card'
import movies from './data/movies.json'

function App() {
  const [isSearch, setIsSearch] = useState(false)
  console.log(movies)
  return (
    <main className="App">
      <section className={`contenedor_search ${isSearch? "active_contenedor_search" : ""}`}>
        <h1 className='title'>StreamFinder</h1>
        <Search setIsSearch = {setIsSearch}/>
      </section>
      {movies?(
        <section className={`grid_cards ${isSearch? "active_grid_class" : ""}`}>
          {movies.results.map(movie => <Card movieTitle = {movie.title}/>)}
        </section>
      ):''}
    </main>
  )
}

export default App
