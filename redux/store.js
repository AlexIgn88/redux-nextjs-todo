import { legacy_createStore as createStore } from 'redux';

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
    case CHECK_LIST:
      return Object.assign({}, state, { lists: checkListByID(action.id) });
    case DEL_CHECKED_LISTS:
      return Object.assign({}, state, { lists: state.lists.filter(item => !item.checked) });
    case DEL_ALL_LISTS:
      return Object.assign({}, state, { lists: [] });
    case DEL_LIST:
      return Object.assign({}, state, {
        lists: state.lists.filter(item => item.id !== action.id)
      });
    case MOVE_LIST_UP:
      return Object.assign({}, state, { lists: movelistUpByID(action.id) });
    case MOVE_LIST_DOWN:
      return Object.assign({}, state, { lists: movelistDownByID(action.id) });
    case RENAME_LIST:
      return Object.assign({}, state, { lists: renameListByID(action.id, action.text) });
    default:
      return state;
  }

  function renameListByID(id, text) {
    let arr = state.lists;
    const index = arr.findIndex((item) => id === item.id);
    arr[index].str = text;
    // console.log(arr[index]);
    return [...arr];
  }

  function checkListByID(id) {
    let arr = state.lists;
    const index = arr.findIndex((item) => id === item.id);
    arr[index].checked = !arr[index].checked;
    return [...arr];
  }

  function movelistUpByID(id) {
    let arr = state.lists;
    const index = arr.findIndex((item) => id === item.id);
    if (index === 0) {
      return arr;
    } else {
      const item = arr[index];
      arr.splice(index, 1);
      arr.splice(index - 1, 0, item);
      return [...arr];
    }
  }

  function movelistDownByID(id) {
    let arr = state.lists;
    const index = arr.findIndex((item) => id === item.id);
    if (index === arr.length - 1) {
      return arr;
    } else {
      const item = arr[index];
      arr.splice(index, 1);
      arr.splice(index + 1, 0, item);
      return [...arr];
    }
  }
}

export const store = createStore(todoReducer);

// console.log(store);
// console.log(store.getState().lists);
// console.log();

// // create a makeStore function
// const makeStore = context => createStore(reducer);

// // export an assembled wrapper
// export const wrapper = createWrapper(makeStore, {debug: true});
