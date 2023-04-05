const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b55bad6060msh5af437009d535c4p1453a8jsnb2df1e047201',
		'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
	}
};

function fetchData(type , input, setDataMovies) {
    let dataM = []
    console.log(type , input)
    fetch(`https://moviesminidatabase.p.rapidapi.com/${type}/imdb_id/byTitle/${input}/`, options)
	.then(response => response.json())
	.then(response => response.results)
    .then(data => data.map( async movie => {
        fetch(`https://moviesminidatabase.p.rapidapi.com/movie/id/${movie.imdb_id}/`,options)
        .then(response => response.json())
        .then(response => response.results)
        .then(data => {
            dataM.push(data)
        })
        .catch(err => console.error(err))
    }))
	.catch(err => console.error(err));
    setDataMovies(dataM)
}


export default fetchData
