import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increment, decrement} from '../actions';
import './Counter.css';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      by: 1
    };
  }

  handleIncrement() {
    this.props.increment(this.state.by);
  }

  handleDecrement() {
    this.props.decrement(this.state.by);
  }

  handleByChange(event) {
    this.setState({
      by: event.target.value
    });
  }

  render() {
    return (
      <section className="Counter">
        <p className="Counter-count">{this.props.counter}</p>

        <button className="Counter-increment" onClick={this.handleIncrement.bind(this)}>
          Increment
        </button>

        <button className="Counter-decrement" onClick={this.handleDecrement.bind(this)}>
          Decrement
        </button>

        <label className="Counter-by">
          Increment / Decrement by:
          <input
            className="Counter-input"
            value={this.state.by}
            type="number"
            onChange={this.handleByChange.bind(this)} />
        </label>
      </section>
    );
  }
}

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    increment,
    decrement
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
