import { useParams } from "react-router-dom";

const MovieDetails = () => {
    

    // destrucring movieId
    const {movieId} = useParams();

    console.log(movieId);

    return(
        <p>!!!!</p>
    )
}

export default MovieDetails;