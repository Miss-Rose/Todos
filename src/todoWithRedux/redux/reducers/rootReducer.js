import todoList from "./todoReducer";
import filter from "./filterReducer";
import {combineReducers} from "redux";

export default combineReducers ({
    todoList,
    filter
});