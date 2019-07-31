import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
//a thunk is a function that returns another function that takes parameters : dispatch & getState

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// function anActionFunction(something){
//   return function(dispatch) {
//     /*
//     return  someAsycFunction().then(
//       someProp or action? => dispatch(actualActionFunction(prop, prop)),
//       error => dispatch)(errorFunction(something,something, err))
//     )
//     */
//   }
// }
export default store;