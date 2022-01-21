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





















// Go get a big ol list of moviez from The Movie Database (TMDB) and put their posters on the home "page" (actually a VIEW - a Route!).
// STEPS
    // Since this catalogue is only displayed at the root URL of our app, we know that means we need to put it in its own **catalogue component**.
          // We will need to render this component conditionally based on what the URL bar says. That is to say, we need to put it in a **Route**
    // When the page loads and the component mounts, make a call to TMDB to get our list of movies!
          // We can use fetch for this, but let's use **axios**. Why? Look, I just like it ok, please stop yelling at me.
          // Since this happens on page load (ie. on component mount), we know we want to make the call inside a **useEffect** with **an empty dependency array**.
          // Once the call comes back from the API, we need to put the data in **state**, which will trigger a re-render, thus updating the page with our movie posters.
    // Set up our JSX such that when the list of movies goes into state and triggers a re-render, all of the movies are mapped to the page.
//
// WHAT WE NEED
//    - A Catalogue component
//    - A router (npm package to install). Need these modules:
//          > BrowserRouter (up in our index.js, wrapping our <App />).
//          > Routes (in the App component)
//          > Route (in the App component)
//    - axios (npm package to install)
//    - useEffect (w an empty dependency array!)
//    - useState


// When the user clicks on a movie image, take them to a new "page" and there make a new call to TMDB to get and display the movie details. This page will identify the movie on it using the TMDB movie ID in the URL.
// STEPS
    // Since this content only appears when the URL is `/movie/movieId`, we know we need to conditionally render it with our router, which means, we need this to all be in a **MovieDetails component**.
          // We will need to render this component conditionally based on what the URL bar says. That is to say, we need to put it in a **Route**. This Route does not point to an absolute URL, but rather one that will render our MovieDetails component no matter what ID we pass to it. That is to say, we render it at a Route that uses **url params**.
          // In the component, we need to go get the ID that is written in the parameter position in the URL. To do that, we need to use the **useParams Hook**.
          // We also need a router **Link** component to get to the MovieDetails component Route. We will be linking from the Catalogue component.
    // Once the component mounts, we use the ID from the URL to make an API call to TMDB for the movie details.
          // We will use **axios**, since we already have it!
          // Since this happens right when the component mounts, we can make the API call in a **useEffect** with **an empty dependency array**.
          // When we get our data back, we want to put that data in **state** (triggering a re-render to put the data on the page).
    // Set up our JSX such that when the movie details are put into state, the component re-renders with the movie details on the page.
//
// WHAT WE NEED
//    - A MovieDetails component
//    - Some router modules (router already installed above):
//          > Route (in the App component), which uses URL params to create a variable Route path.
//          > the useParams Hook
//          > Link (in the Catalogue component)
//    - axios (npm package already installed above)
//    - useEffect (w an empty dependency array!)
//    - useState