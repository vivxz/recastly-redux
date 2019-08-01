import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';
import store from '../store/store.js';
import handleVideoSearch from '../actions/search.js';

var SearchContainer = () => {
  /*
  switch statement that
  returns results for different action cases
  */
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.
const mapStateToProps = (state, props) => {
   return {
    value: state.value
   }
};

const mapDispatchToProps = (dispatch) => { //
  return {
    handleSearchInputChange: (e) => (dispatch())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
