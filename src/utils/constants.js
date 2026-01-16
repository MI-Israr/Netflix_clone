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

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
