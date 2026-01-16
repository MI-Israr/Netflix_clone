const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-12 absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-2xl md:text-6xl font-bold w-1/2">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>

      <div className="flex gap-3 mt-4 md:mt-0">
        <button className="bg-white text-black py-1 md:py-3 px-3 md:px-10 text-xl rounded-md flex items-center hover:bg-opacity-80 transition">
          ▶️ Play
        </button>
        <button className="hidden md:flex bg-gray-500/50 text-white py-3 px-10 text-xl rounded-md items-center hover:bg-opacity-40 transition">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
