export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const ADD_HEIGHT  = 'ADD_HEIGHT';
export const ADD_WIDTH  = 'ADD_WIDTH';

export function increment() {
  return { type: INCREMENT };
}
export function decrement() {
  return { type: DECREMENT };
}

export function addWidth(delta){
  return {type: ADD_WIDTH, delta }
}

export function addHeight(delta){
  return {type: ADD_HEIGHT, delta }
}
