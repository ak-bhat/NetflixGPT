import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

  const movies = useSelector(store=> store.movies)
  console.log(movies.popularMovies);
  

  return (
    movies && (
    <div className="bg-black pl-6 -mt-24 relative">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRated}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    </div>
    )
  )
}

export default SecondaryContainer