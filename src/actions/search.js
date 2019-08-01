import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  var object = {YOUTUBE_API_KEY, q}
  // var results = searchYouTube(object, (videos) => (changeVideoList(videos)))
  // var result = searchYouTube(object, (video) => (changeVideo(video)))

  // const mapDispatchToProps = dispatch => {
  //   return {
  //     changeVideoList: (results) => dispatch({ type: "CHANGE_VIDEO_LIST"}),
  //     changeVideo: (result) => dispatch({type: 'CHANGE_VIDEO'})
  //   }
  // }
  // searchYouTube(object, cb) --> returns an array of item; assign it to changeVideoList & videos,
};

export default handleVideoSearch;

