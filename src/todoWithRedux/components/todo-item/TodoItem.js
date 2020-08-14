import React from "react";
import {deleteItem, toggleDone, toggleImportant} from "../../redux/actionCreator/actionCreator-todo";
import {connect} from 'react-redux';

const TodoItem = ({id, title, done, important, deleteItem, toggleDone, toggleImportant}) => {

    let clazz = 'col-8 item';

    if(important === true){
        clazz += ' important'
    }

    if(done === true){
        clazz += ' done'
    }

        return (
            <div className='bg-secondary d-flex flex-nowrap text-white p-2 mb-2'>
                <div
                    className={clazz}
                    onClick={() => toggleDone(id)}
                >
                    <span className='p-2'>{title}</span>
                </div>

                <button
                    className='btn btn-outline-primary mr-1 ml-auto col-1'
                    onClick={() => toggleImportant(id)}
                > ! </button>

                <button
                    className='btn btn-outline-danger mr-1 ml-auto col-1'
                    onClick={() => deleteItem(id)}
                > X </button>
            </div>


        );
};

const mapDispatchToProps = dispatch => {
  return {
      deleteItem: id => dispatch(deleteItem(id)),
      toggleDone: id => dispatch(toggleDone(id)),
      toggleImportant: id => dispatch(toggleImportant(id)),
  }
};

export default connect(null, mapDispatchToProps)(TodoItem);
