import {FILTERS} from "../actionTypes/actionTypes";

const filter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case FILTERS:
            console.log('in reducer', action.filter);
            return action.filter;

        default:
            return state
    }
};

export default filter;