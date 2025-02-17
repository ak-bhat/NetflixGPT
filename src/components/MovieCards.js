import { IMG_CDN_URL } from "../utils/constants"

const MovieCards = ({movie, posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-28 md:w-36 pr-4">
      <img alt={movie}
      src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCards