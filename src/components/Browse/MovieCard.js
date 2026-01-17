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

// import { useState } from "react";
// import { IMG_CDN_URL } from "../../utils/constants";

// const MovieCard = ({ posterPath, movie }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   if (!posterPath) return null;

//   return (
//     <div
//       className="relative w-36 md:w-56 h-[100%] transition-all duration-300"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <img
//         className="rounded-md object-cover w-full cursor-pointer shadow-lg"
//         alt={movie?.title}
//         src={IMG_CDN_URL + posterPath}
//       />

//       {isHovered && (
//         <div className="absolute top-[-20%] left-[-10%] z-50 w-[120%] bg-[#181818] rounded-md shadow-2xl transition-all duration-300 scale-110">
//           <img
//             className="w-full h-32 md:h-40 object-cover rounded-t-md"
//             src={IMG_CDN_URL + (movie?.backdrop_path || posterPath)}
//             alt="Thumbnail"
//           />
//           <div className="p-4 flex flex-col gap-3">
//             <div className="flex items-center justify-between">
//               <div className="flex gap-2">
//                 <button className="bg-white text-black rounded-full p-2 hover:bg-gray-300 transition">
//                   <svg
//                     className="w-4 h-4"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M8 5v14l11-7z" />
//                   </svg>
//                 </button>
//                 <button className="border-2 border-gray-500 text-white rounded-full p-2 hover:border-white transition">
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 4v16m8-8H4" />
//                   </svg>
//                 </button>
//                 <button className="border-2 border-gray-500 text-white rounded-full p-2 hover:border-white transition">
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M14 9l-5 5m0-5l5 5m5-4a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </button>
//               </div>
//               <button className="border-2 border-gray-500 text-white rounded-full p-2 hover:border-white transition">
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M19 9l-7 7-7-7" />
//                 </svg>
//               </button>
//             </div>
//             <div className="flex items-center gap-2 text-sm text-white font-semibold">
//               <span className="text-green-400">98% Match</span>
//               <span className="border border-gray-500 px-1 text-[10px] text-gray-400">
//                 18+
//               </span>
//               <span>2 Seasons</span>
//               <span className="border border-gray-500 px-1 text-[10px] text-gray-400 rounded">
//                 HD
//               </span>
//             </div>
//             <div className="flex items-center gap-2 text-[12px] text-white">
//               <span>Adrenaline Rush</span>
//               <span className="text-gray-500">•</span>
//               <span>Gritty</span>
//               <span className="text-gray-500">•</span>
//               <span>Action</span>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MovieCard;
