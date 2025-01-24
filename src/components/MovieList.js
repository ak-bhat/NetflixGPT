import MovieCards from "./MovieCards";
const MovieList = ({ title, movies }) => {
  // console.log(title, movies);

  return (
    <div className="p-6">
        <h1 className="text-3xl py-4 text-white font-bold uppercase">{title}</h1>
      <div className="flex overflow-x-scroll scroll-smooth scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCards key={movie.id} movie={movie.title} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
