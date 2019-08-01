import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

var handleVideoSearch = (q) => {
  var object = {YOUTUBE_API_KEY, q}
  return (dispatch) => {
    searchYouTube(object, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]))
    })
  //TODO:  Write an asynchronous action to handle a video search!
  }
//thunk is a function the returns a function
};

export default handleVideoSearch;

