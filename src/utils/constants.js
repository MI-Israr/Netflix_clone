export const NAV_LINKS = [
  { id: "home", name: "Home", path: "/browse" },
  { id: "series", name: "Series", path: "/series" },
  { id: "films", name: "Films", path: "/films" },
  { id: "new", name: "New & Popular", path: "/new-and-popular" },
  { id: "mylist", name: "My List", path: "/my-list" },
  { id: "lang", name: "Browse by Language", path: "/language" },
];

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAIn_Mg9fX96IJYbc7pYmS8f89FInUOn-N87S8_v3CByis9-S7lO0VId9KSpWwU89XpAsM97T3_Kz7Y0m6SQU64.png?r=bd8";

export const SEARCH_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="white"
  >
    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
  </svg>
);
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
