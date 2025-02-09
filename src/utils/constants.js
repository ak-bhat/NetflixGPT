export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
export const PHOTO_URL = "https://i.pinimg.com/originals/76/49/b0/7649b0de59f4d7c55b1fb1f998185587.jpg"
export const BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/4690cab8-243a-4552-baef-1fb415632f74/web/IN-en-20241118-TRIFECTA-perspective_0b813abc-8365-4a43-a9d8-14c06e84c9f3_large.jpg"
export const API_URL = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const VIDEO_URL = 'https://api.themoviedb.org/3/movie/';
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"
export const POPULAR_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
export const TOP_RATED_URL = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
export const UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
export const SUPPORTED_LANGUAGES = [
  { identifier:"en", name: "English"},
  { identifier:"hindi", name: "Hindi"},
  { identifier:"esp", name: "Spanish"}
]