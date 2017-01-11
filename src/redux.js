export function createStore(reducer) {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe
  };
};

export function combineReducers (reducers) {
  return (state = {}, action) => {
    return Object.keys(reducers)
	    .reduce((nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );

        return nextState;
      }, {});
  };
}

export function bindActionCreators(actionCreators, dispatch) {
  const keys = Object.keys(actionCreators);
  const boundActionCreators = {};

  keys.forEach((key, index) => {
    const actionCreator = actionCreators[key];

    boundActionCreators[key] = (...args) => dispatch(actionCreator(...args));
  });

  return boundActionCreators;
}
