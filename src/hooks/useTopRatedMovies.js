import { useDispatch } from "react-redux"
import { API_OPTIONS, TOP_RATED_URL } from "../utils/constants"
import { addtopRatedMovies } from "../utils/moviesSlice"
import { useEffect } from "react"


const useTopRatedMovies = () =>{

    const dispatch = useDispatch()

    const getTopRatedMovies = async () =>{  // API Req
      const data = await fetch(TOP_RATED_URL, API_OPTIONS)
      const json = await data.json()
      dispatch(addtopRatedMovies(json.results))
    }
  
    useEffect(()=>{
      getTopRatedMovies()  //API Call
    }, [])
}

export default useTopRatedMovies;