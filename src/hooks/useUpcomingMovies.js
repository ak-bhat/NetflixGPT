import { useDispatch } from "react-redux"
import { API_OPTIONS, UPCOMING_URL } from "../utils/constants"
import {  addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"


const useUpcomingMovies = () =>{

    const dispatch = useDispatch()

    const getUpcomingMovies = async () =>{  // API Req
      const data = await fetch(UPCOMING_URL, API_OPTIONS)
      const json = await data.json()
      dispatch(addUpcomingMovies(json.results))
    }
  
    useEffect(()=>{
      getUpcomingMovies()  //API Call
    }, [])
}

export default useUpcomingMovies;