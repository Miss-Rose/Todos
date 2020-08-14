import React from "react";
import TodoItem from "../todo-item";
import {connect} from 'react-redux';
import {FILTERS} from "../../redux/actionTypes/actionTypes";

const TodoList = ({todoList, filter}) => {

    const filteredList = (list, filter) => {
        switch (filter) {
            case FILTERS.SHOW_ALL:
                return list;
            case FILTERS.SHOW_DONE:
                return list.filter(i => i.done);
            case FILTERS.SHOW_ACTIVE:
                return list.filter(i => !i.done);
            case FILTERS.SHOW_IMPORTANT:
                return list.filter(i => i.important);
            default:
                return list;
        }
    };

    let list = filteredList(todoList, filter);

    return (
        <div className='p-1 m-2'>
            {
                list.map(item =>
                    <TodoItem
                        key={item.id}
                        {...item}
                    />
                )
            }
        </div>
    );

};

const mapStateToProps = state => {
    return {
        todoList: state.todoList,
        filter: state.filter
    }
};

export default connect(mapStateToProps)(TodoList);
