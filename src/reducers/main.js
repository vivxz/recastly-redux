import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import changeVideo from '../actions/currentVideo.js';

// var rootReducer = (state={videoList:[], currentVideo:null}, action) => {
//   switch(action.type){
//     case 'CHANGE_VIDEO':
//      return {currentVideo: action.video}
//     case 'CHANGE_VIDEO_LIST':
//      return {videoList: action.videos}
//     default:
//      return state
//   }
//   return combineReducers({currentVideos, videoList})
// };

var rootReducer = combineReducers({currentVideo, videoList});

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
