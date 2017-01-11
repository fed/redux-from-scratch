import {INCREMENT, DECREMENT} from '../actions/types';

const initialState = 0;

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + Number(action.payload.by);
    case DECREMENT:
      return state - Number(action.payload.by);
    default:
      return state;
  }
};
