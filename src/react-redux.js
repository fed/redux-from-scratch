import React from 'react';

export function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    class ConnectedWrappedComponent extends React.Component {
      componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(this.handleChange.bind(this))
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
            {...mapStateToProps(this.context.store.getState(), this.props)}
            {...mapDispatchToProps(this.context.store.dispatch, this.props)} />
        )
      }
    }

    ConnectedWrappedComponent.contextTypes = {
      store: React.PropTypes.object.isRequired
    };

    return ConnectedWrappedComponent;
  }
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
  store: React.PropTypes.object
};
