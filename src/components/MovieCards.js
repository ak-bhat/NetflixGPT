import { IMG_CDN_URL } from "../utils/constants"

const MovieCards = ({movie, posterPath}) => {
  // console.log(posterPath);
  
  return (
    <div className="w-36 pr-4">
      <img alt={movie}
      src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCards