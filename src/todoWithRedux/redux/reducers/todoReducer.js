import {ADD_ITEM, DELETE_ITEM, TOGGLE_IMPORTANT, TOGGLE_DONE} from "../actionTypes/actionTypes";

const initialState = [
    {id: 1, title: 'learn', important: true, done: false},
    {id: 2, title: 'walk', important: false, done: true},
    {id: 3, title: 'eat', important: true, done: false},
];

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.text,
                    done: false,
                    important: false
                }
            ];
        case DELETE_ITEM:
            const index = state.findIndex(i =>
            i.id === action.id);
            return [
                ...state.slice(0, index),
                ...state.slice(index+1)
            ];

        case TOGGLE_DONE:
            return state.map(item =>
            item.id === action.id ? {...item, done: !item.done} : item);

        case TOGGLE_IMPORTANT:
            return state.map(item =>
                item.id === action.id ? {...item, important: !item.important} : item);

        default:
            return state;
    }
} ;



export default todoList;