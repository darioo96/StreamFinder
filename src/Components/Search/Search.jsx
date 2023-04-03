import { useEffect, useState } from "react";
import "./Search.css";

function Search({ setIsSearch }) {

  const [select, setSelect] = useState('movie')
  const [input, setInput] = useState('')

  useEffect(() => {
    input? setIsSearch(true) : "";
    
  }, [input])
  

  return (
    <form className="var_search" onSubmit={(e) => e.preventDefault()}>
      <select className="type" name="type" onChange={(e) => setSelect(e.target.value)}>
        <option value="movie">Movie</option>
        <option value="serie">Serie</option>
        <option value="actor">Actor</option>
      </select>
      <input className="text" type="text" onChange={(e) => setInput(e.target.value)}/>
    </form>
  );
}

export default Search;
