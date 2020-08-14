import React from "react";
import './style.css';

const ListItem = ({item, onDelete, onImportant, onDone}) => {

    let clazz = 'col-8 item';

    if(item.important === true){
        clazz += ' important'
    }

    if(item.done === true){
        clazz += ' done'
    }

    return (
        <div className='d-flex flex-nowrap'>
            <div
                className={clazz}
                onClick={onDone}
            >
                <span className='p-2'>{item.title}</span>
            </div>

            <button
                className='btn btn-outline-primary mr-1 ml-auto col-1'
                onClick={onImportant}
            > ! </button>

            <button
                className='btn btn-outline-danger mr-1 ml-auto col-1'
                onClick={onDelete}
            > X </button>
        </div>
    );

};

export default ListItem;