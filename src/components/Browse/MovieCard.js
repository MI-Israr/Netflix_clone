import { IMG_CDN_URL } from "../../utils/constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="w-32 md:w-48  cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:z-30">
      <img
        className="rounded-md object-cover w-full h-full shadow-lg"
        alt={title}
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;