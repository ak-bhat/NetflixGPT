import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS, API_URL } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"


const useNowPlayingMovies = () =>{

    const dispatch = useDispatch()

    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async () =>{  // API Req
      const data = await fetch(API_URL, API_OPTIONS)
      const json = await data.json()
      dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect(()=>{
      if(!nowPlayingMovies) getNowPlayingMovies();  //API Call
    }, [])
}

export default useNowPlayingMovies;