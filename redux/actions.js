export const ADD_LIST = 'ADD_LIST';
export const CHECK_LIST = 'CHECK_LIST';
export const DEL_CHECKED_LISTS = 'DEL_CHECKED_LISTS';
export const DEL_LIST = 'DEL_LIST';
export const MOVE_LIST_UP = 'MOVE_LIST_UP';
export const MOVE_LIST_DOWN = 'MOVE_LIST_DOWN';
export const DEL_ALL_LISTS = 'DEL_ALL_LISTS';
export const RENAME_LIST = 'RENAME_LIST';

export function addList(text) {
  return { type: ADD_LIST, text: text };
}

export function checkList(id) {
  return { type: CHECK_LIST, id: id };
}

export function delCheckedLists() {
  return { type: DEL_CHECKED_LISTS };
}

export function delList(id) {
  return { type: DEL_LIST, id: id };
}

export function movelistUp(id) {
  return { type: MOVE_LIST_UP, id: id };
}

export function movelistDown(id) {
  return { type: MOVE_LIST_DOWN, id: id };
}

export function delAllLists() {
  return { type: DEL_ALL_LISTS };
}

export function renameList(id, text) {
  return { type: RENAME_LIST, id: id, text: text };
}