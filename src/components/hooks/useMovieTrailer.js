import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../utils/constants";
import { addTrailerVideo } from "../../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    // Filter for a video with type 'Trailer'
    const filterData = json.results.filter((video) => video.type === "Trailer");

    // Fallback: If no trailer exists, pick the first video; otherwise pick the first trailer
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]); // Runs whenever the featured movie ID changes
};

export default useMovieTrailer;
