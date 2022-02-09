import axios from "axios";
const KEY = "AIzaSyADa0mf0ncZwTSbO-Sgd5UYK2TOWzjBJqc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
