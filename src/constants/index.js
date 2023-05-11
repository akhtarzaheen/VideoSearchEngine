export const API_KEY = "AIzaSyCjTxeXF377Z4XC7aeoSFSf_kW5WLiO9rk";

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  API_KEY;

export const LIVE_CHAT_API_URL =
  "https://youtube.googleapis.com/youtube/v3/liveChat/messages?key=" + API_KEY;

export const YOUTUBE_SEARCHED_VIDEOS =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=" +
  API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const CHANNEL_DESCRIPTION =
  "https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&part=snippet&id=";

export const FILTER_LIST_NAME = [
  "Live",
  "Games",
  "Sports",
  "Namaste Js",
  "Namaste Dev",
  "News",
  "Entertainment",
  "Films Criticism",
  "Reactions",
  "Music",
  "Comedy",
  "Trailers",
  "Manga",
  "Anime",
  "Trailers",
  "Manga",
  "Anime",
  "Trailers",
  "Manga",
  "Anime",
  "Cricket",
];

export const LIVE_CHAT_NAME = ["Zaheen Akhtar", "Ankit", "Arshdeep"];
export const LIVE_CHAT = {
  chat: "Lorem Ipsum is simply dummy text of the printing",
};

// export const YOUTUBE_VIDEO_COMMENTS_URL = "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY]"

export const YOUTUBE_VIDEO_COMMENTS_URL =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";
