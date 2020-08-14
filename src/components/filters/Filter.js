import React from "react";

const Filter = ({filter, onSetFilter = () => {}}) => {

    let clazz = 'btn btn-outline-light mr-1';


    return (
        <div className='bg-dark text-white text-center p-3 mb-3'>
            <button className={clazz} onClick={() => onSetFilter('all')}> All </button>
            <button className={clazz} onClick={() => onSetFilter('done')}> Done </button>
            <button className={clazz} onClick={() => onSetFilter('important')}> Important </button>
            <button className={clazz} onClick={() => onSetFilter('active')}> Active </button>
        </div>
    );

};

export default Filter;