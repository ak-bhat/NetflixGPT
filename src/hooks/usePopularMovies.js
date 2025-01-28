import { useDispatch } from "react-redux"
import { API_OPTIONS, POPULAR_URL } from "../utils/constants"
import { addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"


const usePopularMovies = () =>{

    const dispatch = useDispatch()

    const getPopularMovies = async () =>{  // API Req
      const data = await fetch(POPULAR_URL, API_OPTIONS)
      const json = await data.json()
      dispatch(addPopularMovies(json.results))
    }
  
    useEffect(()=>{
      getPopularMovies()  //API Call
    }, [])
}

export default usePopularMovies;