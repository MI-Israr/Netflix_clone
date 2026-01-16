import banner from "../../assets/images/banner.jpg";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-56 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:z-30">
      <img
        className="rounded-md object-cover w-full h-full shadow-lg"
        alt={title}
        src={banner + posterPath}
      />
    </div>
  );
};

export default MovieCard;
