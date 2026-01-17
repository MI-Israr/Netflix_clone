import { useSelector } from "react-redux";
import MovieList from "./MovieList";

// const SecondaryContainer = () => {
//   const movies = useSelector((store) => store.movies);

//   return (
//     <div className="bg-black">
//       <div className="-mt-12 md:-mt-52 pl-4 md:pl-12 relative z-20">
//         <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
//         <MovieList title={"Trending"} movies={movies?.trendingMovies} />
//         <MovieList title={"Popular"} movies={movies?.popularMovies} />
//         <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
//       </div>
//     </div>
//   );
// };

// export default SecondaryContainer;

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-12 md:-mt-52 relative z-20">
        {/* Standard List */}
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />

        {/* Top 10 List (Same component, different prop) */}
        <MovieList
          title={"Top 10 Series in Pakistan Today"}
          movies={movies?.trendingMovies?.slice(0, 10)}
          isTopTen={true}
        />

        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
