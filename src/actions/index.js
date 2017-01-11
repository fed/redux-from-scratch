import {INCREMENT, DECREMENT, TOGGLE} from './types';

export function increment(by = 1) {
  return {
    type: INCREMENT,
    payload: {
      by
    }
  };
}

export function decrement(by = 1) {
  return {
    type: DECREMENT,
    payload: {
      by
    }
  };
}

export function toggle() {
  return {
    type: TOGGLE
  };
}
