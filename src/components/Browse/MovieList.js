import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="px-6">
      {/* Title with the arrow icon matching your image */}
      <h1 className="text-lg md:text-2xl py-4 text-white font-semibold cursor-pointer hover:text-gray-300 transition-all flex items-center gap-1">
        {title} <span className="text-cyan-400 text-sm">›</span>
      </h1>

      {/* Horizontal scrolling container */}
      <div className="flex overflow-x-scroll no-scrollbar scroll-smooth">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title || movie.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
