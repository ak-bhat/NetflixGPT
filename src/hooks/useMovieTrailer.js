import { useDispatch } from "react-redux";
import { VIDEO_URL } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = () =>{
    const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(VIDEO_URL, process.env.REACT_APP_API_OPTIONS);
    const json = await data.json();

    // console.log(json.results);

    const trailerData = json.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = trailerData.length ? trailerData[0] : json.results[0];
    // console.log(trailerData[0]);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useMovieTrailer;