import React from 'react';
import store from './store';

// https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    return class extends React.Component {
      componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleChange.bind(this))
      }

      componentWillUnmount() {
        this.unsubscribe()
      }

      handleChange() {
        this.forceUpdate()
      }

      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)} />
        )
      }
    }
  }
}
