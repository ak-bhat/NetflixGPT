import { useSelector } from "react-redux"
import MovieList from "./MovieList"

const SecondaryContainer = () => {

  const movies = useSelector(store=> store.movies)
  console.log(movies);
  

  return (
    movies.nowPlayingMovies && (
    <div className="bg-black pl-6">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Romantic"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Crime Thrillers"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
    )
  )
}

export default SecondaryContainer