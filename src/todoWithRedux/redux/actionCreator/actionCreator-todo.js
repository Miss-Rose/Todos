import {ADD_ITEM, DELETE_ITEM, TOGGLE_DONE, TOGGLE_IMPORTANT} from "../actionTypes/actionTypes";

let nextId = 0;

export const addItem = text => ({
    type: ADD_ITEM,
    id: nextId++,
    text
});

export const deleteItem = id => ({
   type: DELETE_ITEM,
   id
});

export const toggleDone = id => ({
   type: TOGGLE_DONE,
   id
});

export const toggleImportant = id => ({
   type: TOGGLE_IMPORTANT,
   id
});
