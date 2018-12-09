import { ADD_PLAYER } from "./actionTypes";


export const addPlayer = content => ({
  type: ADD_PLAYER,
  payload: {
    content
  }
});
