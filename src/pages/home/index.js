import { Container, MovieList, Movie } from "./styles"
// import { ApiKey } from "../../config/key"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Home() {

    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500/'

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=c78f11732285623d000ef2be482fdabe&language=en-US&page=6')
        .then(response => response.json())
        .then(data => setMovies(data.results))

    }, [])
    
    return (
        <Container>
            <h1>Movie Release Information <br/>in Theaters</h1>
            <MovieList>
                {
                     movies.map(movie => {
                        return (
                            <Movie key={movie.id}>
                                
                                <Link to={`/details/${movie.id}`}> <img src={`${image_path}${movie.poster_path}`} alt={movie.title}/> </Link> 

                                <span>{movie.title}</span>
                            </Movie>
                        )
                     })
                }
            </MovieList>
            <footer>Website Developed by Arian Viegas</footer>
        </Container>
    )
}

export default Home
