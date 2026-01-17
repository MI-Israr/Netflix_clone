import PLAY_ICON from "../../assets/icons/play-icon.png";
import { INFO_ICON } from "../../utils/constants";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-2xl md:text-6xl font-bold w-1/2">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>

      <div className="flex gap-3 mt-4 md:mt-0">
        <button className="bg-white text-black py-2  px-6 text-lg font-semibold rounded-md flex items-center hover:bg-opacity-80 transition">
          <img src={PLAY_ICON} alt="" className="w-7 mr-2" />
          Play
        </button>
        <button className="hidden md:flex bg-gray-500/50 text-white py-2  px-6 text-lg rounded-md items-center hover:bg-opacity-40 transition">
          <span className="mr-2">{INFO_ICON}</span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
