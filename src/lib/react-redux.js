import React from 'react';

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    class ConnectedWrappedComponent extends React.Component {
      componentDidMount() {
        const {subscribe} = this.context.store;

        this.unsubscribe = subscribe(this.handleChange.bind(this));
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      handleChange() {
        this.forceUpdate();
      }

      render() {
        const {getState, dispatch} = this.context.store;

        return (
          <WrappedComponent
            {...this.props}
            {...mapStateToProps(getState(), this.props)}
            {...mapDispatchToProps(dispatch, this.props)} />
        )
      }
    }

    ConnectedWrappedComponent.contextTypes = {
      store: React.PropTypes.object.isRequired
    };

    return ConnectedWrappedComponent;
  };
}

export class Provider extends React.Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object.isRequired
};
