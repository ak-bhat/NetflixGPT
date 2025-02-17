import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const GptMovieSuggetions = () => {

  const {movieResults, movieNames} = useSelector(store => store.gpt)
  if(!movieNames) return null; 

  return (
    <div className="bg-black text-white bg-opacity-80">
      {movieNames.map((movieName, index)=><MovieList title={movieName} movies={movieResults[index]} />)}
    </div>
  )
}

export default GptMovieSuggetions