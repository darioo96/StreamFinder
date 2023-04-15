import Card from "../Card/Card";

function GridCards({dataMovies, isSearch}) {
  return (
    <section
      className={`grid_cards ${isSearch ? "active_grid_cards" : ""}`}
    >
      {isSearch? 
        dataMovies.map((movie) => <Card key={movie.imdb_id} movie={movie} /> )
        :''}
    </section>
  );
}

export default GridCards;
