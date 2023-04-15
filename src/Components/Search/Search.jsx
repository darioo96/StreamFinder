import { useEffect, useState } from "react";
import "./Search.css";
import fetchData from "../../data/fetchData";

function Search({ setIsSearch, setDataMovies }) {
  const [select, setSelect] = useState("movie");
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearch(false)
    fetchData(select, input, setDataMovies);
    setTimeout(() => {
      setIsSearch(true);
    }, 1000);
  };

  return (
    <form className="var_search" onSubmit={handleSubmit}>
      <select
        className="type"
        name="type"
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="movie">Movie</option>
        <option value="serie">Serie</option>
        <option value="actor">Actor</option>
      </select>
      <input
        className="text"
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default Search;
