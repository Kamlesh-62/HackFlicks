import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect} from "react";

const MovieDetails = () => {
    

    // destrucring movieId
    const {movieId} = useParams();
    const [movie,setMovie] = useState({});

    useEffect (()=> {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieId}`,
            dataResponse: "json",
            method:"GET",
            params: {
                api_key: '4ef1b45352cd9c0b6abc38a0d42e9a21'
            }
        }).then( (res) =>{
            setMovie(res.data)
        });

    }, [movieId])

    
    const { original_title, tagline, overview, poster_path } = movie;
    return (
        <div className="poster">
            <div className="description">
                <h2>{original_title}</h2>
                <h3>{tagline}</h3>
                <p>{overview}</p>
            </div>
            <div className="poster-image">
                {
                    poster_path &&
                    <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={`Movie poster for ${original_title}`}
                    />
                }
            </div>
        </div>
    )
    
}

export default MovieDetails;