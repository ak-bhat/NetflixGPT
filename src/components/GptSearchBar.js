import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import { useRef } from "react"
import genAI from "../utils/openai"
import {API_OPTIONS} from "../utils/constants"
import {addGptMovieResults} from "../utils/gptSlice"

const GptSearchBar = () => {

  const language = useSelector((store)=> store.config.language)
  const gptSearchText = useRef(null)
  const dispatch = useDispatch()


  const searchMovieTMDB = async (movie) =>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&language=en-US&page=1', API_OPTIONS)

    const json = await data.json()

    return json.results;
  }

  const handleGptSearchClick = async () =>{

    const gptQuery = "Act a movie recomendation system and suggest some good movies according to the query." + gptSearchText.current.value + ". Only give me names of 5 movies, comma seperated, like the example : Guppy, Sholay, Don, Lucifer, Bahubali and if you dont have movie names just reply Sorry no suggestions"

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


    const result = await model.generateContent(gptQuery);

    // console.log(result.response.text());

    const gptMovies = result.response.text().split(",") //[array of movies]

    const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie))  // Will return array of promises [p1,p2..p5] we have five movies so five times promise is returned

    const searchMovieData = await Promise.all(promiseArray)
    
    // console.log(searchMovieData);

    dispatch(addGptMovieResults({movieNames:result.response.text(), movieResults:searchMovieData}))
    
  }

  return (
    <div>
        <form className="p-2 bg-opacity-50 bg-black" onSubmit={(e)=>e.preventDefault()}>
            <input ref={gptSearchText} className="p-4 m-4 w-72" type="text" placeholder={lang[language].placeholder} />
            <button className="py-2 px-4 rounded-lg bg-red-600 text-white" onClick={handleGptSearchClick}>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar