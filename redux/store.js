import { createStore } from 'redux';

// import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import { INCREMENT, DECREMENT, ADD_HEIGHT, ADD_WIDTH } from './actions.js';


function counterReducer(state = { value: 0, height: 10, width: 10 }, action) {
  switch (action.type) {
    // case HYDRATE:
    //   return {...state, ...action.payload};
    case INCREMENT:
      return Object.assign({}, state, { value: state.value + 1 });
    case DECREMENT:
      return Object.assign({}, state, { value: state.value - 1 });
    case ADD_HEIGHT:
      return Object.assign({}, state, { height: state.height + action.delta });
    case ADD_WIDTH:
      return Object.assign({}, state, { width: state.width + action.delta });
    default:
      return state;
  }
}

export const store = createStore(counterReducer);

// // create a makeStore function
// const makeStore = context => createStore(reducer);

// // export an assembled wrapper
// export const wrapper = createWrapper(makeStore, {debug: true});
