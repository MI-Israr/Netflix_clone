// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   if (!movies) return null;

//   return (
//     <div className="px-6">
//       <h1 className="text-lg md:text-2xl py-4 text-white font-semibold cursor-pointer hover:text-gray-300 transition-all flex items-center gap-1">
//         {title} <span className="text-cyan-400 text-sm">›</span>
//       </h1>
//       <div className="flex overflow-x-scroll no-scrollbar scroll-smooth">
//         <div className="flex gap-4">
//           {movies.map((movie) => (
//             <MovieCard
//               key={movie.id}
//               posterPath={movie.poster_path}
//               title={movie.title || movie.name}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;

// import { useRef, useState, useEffect } from "react";
// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   const scrollRef = useRef(null);
//   const [showLeftArrow, setShowLeftArrow] = useState(false);
//   const [showRightArrow, setShowRightArrow] = useState(true);

//   const handleArrowVisibility = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
//       setShowLeftArrow(scrollLeft > 0);
//       setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
//     }
//   };

//   useEffect(() => {
//     handleArrowVisibility();
//   }, [movies]);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollTo =
//         direction === "left"
//           ? scrollLeft - clientWidth
//           : scrollLeft + clientWidth;

//       scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
//     }
//   };

//   if (!movies) return null;

//   return (
//     <div className="px-6 md:px-12 relative group ">
//       <h1 className="text-lg md:text-2xl py-4 text-white font-semibold cursor-pointer hover:text-gray-300 transition-all flex items-center gap-1 group/title">
//         {title}
//         <span className="text-cyan-400 text-sm opacity-0 group-hover/title:opacity-100 transition-opacity">
//           Explore All ›
//         </span>
//       </h1>

//       <div className="relative">
//         {showLeftArrow && (
//           <button
//             onClick={() => scroll("left")}
//             className="absolute left-0 top-0 bottom-0 z-40 w-12 bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center"
//           >
//             <span className="text-3xl">‹</span>
//           </button>
//         )}

//         <div
//           ref={scrollRef}
//           onScroll={handleArrowVisibility}
//           className="flex overflow-x-scroll no-scrollbar scroll-smooth gap-4 pb-4"
//         >
//           <div className="flex gap-4">
//             {movies.map((movie) => (
//               <MovieCard
//                 key={movie.id}
//                 posterPath={movie.poster_path}
//                 title={movie.title || movie.name}
//               />
//             ))}
//           </div>
//         </div>

//         {showRightArrow && (
//           <button
//             onClick={() => scroll("right")}
//             className="absolute right-0 top-0 bottom-0 z-40 w-12 bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center"
//           >
//             <span className="text-3xl">›</span>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieList;

import { useRef, useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies, isTopTen = false }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleArrowVisibility = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 1);
    }
  };

  useEffect(() => {
    handleArrowVisibility();
  }, [movies]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  if (!movies) return null;

  return (
    <div className="px-6 md:px-12 relative overflow-y-visible">
      <div className=" group">
        <h1 className="text-lg md:text-2xl py-4 text-white font-semibold flex items-center gap-1 group/title">
          {title}
          <span className="text-cyan-400 text-sm opacity-0 group-hover/title:opacity-100 transition-opacity">
            Explore All ›
          </span>
        </h1>
      </div>

      <div className="relative">
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-0 bottom-0 z-50 w-12 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center"
          >
            <span className="text-4xl font-light">‹</span>
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={handleArrowVisibility}
          className={`flex overflow-x-scroll no-scrollbar scroll-smooth overflow-y-visible ${
            isTopTen ? "gap-16 pt-6 pb-10" : "gap-4 pb-10 pt-10 -mt-10"
          }`}
        >
          <div className="flex gap-6">
            {movies.map((movie, index) => (
              <div key={movie.id} className="relative flex items-center">
                {/* 🔥 Logic for Top 10 Numbers */}
                {isTopTen && (
                  <div className="absolute left-[-10px] select-none z-[-1]">
                    <h1
                      className="text-8xl md:text-[200px] font-bold text-black leading-none drop-shadow-[0_2px_2px_rgba(255,255,255,0.4)]"
                      style={{ WebkitTextStroke: "2px #555" }}
                    >
                      {index + 1}
                    </h1>
                  </div>
                )}

                {/* The Poster */}
                <div className={isTopTen ? "ml-8 md:ml-16" : ""}>
                  <MovieCard
                    posterPath={movie.poster_path}
                    movie={movie}
                    title={movie.title || movie.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-0 bottom-0 z-50 w-12 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center"
          >
            <span className="text-4xl font-light">›</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieList;
