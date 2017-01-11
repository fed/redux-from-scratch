import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from '../redux';
import {toggle as toggleLoading} from '../actions';
import './Loading.css';

const Loading = ({ loading, toggleLoading }) => (
  <div>
    <button onClick={toggleLoading}>Toggle Loading</button>
    <p className={loading ? 'Loading-visible' : 'Loading-invisible'}>Loading...</p>
  </div>
);

Loading.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  toggleLoading: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleLoading }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
