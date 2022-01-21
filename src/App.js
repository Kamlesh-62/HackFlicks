import Catalogue from "./Catalogue";
import { Route,Routes} from "react-router-dom"
import MovieDetails from "./MovieDetails";





function App() {
  return (
    <div className="wrapper">
      <header className="App-header">
         <h1>HackFlix</h1>
      </header>

      <Routes>
        <Route path="/" element={ <Catalogue /> }  /> 
        <Route path="/movie/:movieId" element={ <MovieDetails /> } />
      </Routes> 
    </div>
  );
}

export default App;




















