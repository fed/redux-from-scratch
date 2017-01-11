import {TOGGLE} from '../actions/types';

// Start off as "not loading"
const initialState = false;

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return !state;
    default:
      return state;
  }
}
