import { useEffect, useState } from 'react'
import './App.css'
import Search from './Components/Search/Search'
import GridCards from './Components/GridCards/GridCards'

function App() {
  const [isSearch, setIsSearch] = useState(false)
  const [dataMovies, setDataMovies] = useState([])
  
  return (
    <main className="App">
      <section className={`contenedor_search ${isSearch? "active_contenedor_search" : ""}`}>
        <h1 className='title'>StreamFinder</h1>
        <Search setIsSearch = {setIsSearch} setDataMovies ={setDataMovies}/>
      </section>
        <GridCards dataMovies = {dataMovies} isSearch = {isSearch}/>
    </main>
  )

}

export default App
