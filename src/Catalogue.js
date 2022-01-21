import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Catalogue = () => {
    const [allMovies, setAllMovies] = useState([]);

   useEffect ( () => {
    axios({
        url: 'https://api.themoviedb.org/3/discover/movie',
        dataResponse: "json",
        method:"GET",
        params: {
            api_key: '4ef1b45352cd9c0b6abc38a0d42e9a21',
            language: 'en-US',
            sort_by: 'popularity.desc',
            include_adult: 'false',
            include_video: 'false',
            page: 1,
            primary_release_year: 2021,
        }
    }).then( (response) => {
        const movies = response.data.results
        setAllMovies(movies)
    })
   }, [])

    return(
        <ul className="catalogue">{
        allMovies.map( (movie) =>{
            const { poster_path, original_title, id} = movie;

            return (
                <li key={id} >
                    <Link to={`/movie/${id}`} > 
                        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
                    </Link>
                </li>
                )
            })
        }
        </ul>
    )
}
export default Catalogue;
// 4ef1b45352cd9c0b6abc38a0d42e9a21