import { combineReducers, legacy_createStore as createStore } from 'redux';
import undoable from 'redux-undo';

// import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import { ADD_LIST, CHECK_LIST, DEL_CHECKED_LISTS, DEL_LIST, MOVE_LIST_UP, MOVE_LIST_DOWN, DEL_ALL_LISTS, RENAME_LIST } from './actions.js';

const defaultState = {
  lists: []
};

function todoReducer(state = defaultState, action) {
  switch (action.type) {
    // case HYDRATE:
    //   return {...state, ...action.payload};
    case ADD_LIST:
      return Object.assign({}, state, { lists: [...state.lists, { str: action.text, id: Date.now(), checked: false }] });
    case DEL_LIST:
      return Object.assign({}, state, {
        lists: state.lists.filter(item => item.id !== action.id)
      });
    case CHECK_LIST:
      return Object.assign({}, state, {
        lists: state.lists.map(item => {
          if (item.id === action.id) return { ...item, checked: !item.checked };
          return item;
        })
      });
    case DEL_CHECKED_LISTS:
      return Object.assign({}, state, { lists: state.lists.filter(item => !item.checked) });
    case DEL_ALL_LISTS:
      return Object.assign({}, state, { lists: [] });
    case RENAME_LIST:
      return Object.assign({}, state, {
        lists: state.lists.map(item => {
          if (item.id === action.id) return { ...item, str: action.text };
          return item;
        })
      });

    case MOVE_LIST_UP:
      {
        const id = action.id;
        const arr = [...state.lists];
        const index = arr.findIndex(item => item.id === id);
        // console.log(id);
        // console.log(index);
        if (index < 0) {
          return state;
        } else {
          const item = arr[index];
          arr.splice(index, 1);
          arr.splice(index - 1, 0, item);
          return Object.assign({}, state, { lists: arr });
        }
      }


    case MOVE_LIST_DOWN:
      {
        const id = action.id;
        const arr = [...state.lists];
        const index = arr.findIndex(item => item.id === id);
        // console.log(id);
        // console.log(index);
        if (index < 0) {
          return state;
        } else {
          const item = arr[index];
          arr.splice(index, 1);
          arr.splice(index + 1, 0, item);
          return Object.assign({}, state, { lists: arr });
        }
      }
    default:
      return state;
  }
}

// export const store = createStore(todoReducer);
export const store = createStore(undoable.default(todoReducer));  //в документации почему-то undoable(reducer), но заработало только с undoable.default(reducer)












// console.log(store);
// console.log(undoable.default(todoReducer));
// console.log(todoReducer);

// const undoableReducer = combineReducers({
//   counter: undoable.default(todoReducer, {
//     limit: 10 // set a limit for the size of the history
//   })
// });
// export const storeSecond = createStore(undoableReducer);
// console.log(createStore(storeSecond));

// console.log(store);
// console.log(store.getState().lists);
// console.log();

// // create a makeStore function
// const makeStore = context => createStore(reducer);

// // export an assembled wrapper
// export const wrapper = createWrapper(makeStore, {debug: true});
