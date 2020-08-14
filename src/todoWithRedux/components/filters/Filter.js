import React from "react";
import {connect} from 'react-redux';
import {setFilter} from "../../redux/actionCreator/actionCreator-filter";
import {FILTERS} from "../../redux/actionTypes/actionTypes";

const Filter = ({setFilter}) => {

    let clazz = 'btn btn-outline-light mr-1';

    return (
        <div className='bg-success text-white text-center p-3 mb-3'>
            <button className={clazz} onClick={() => setFilter(FILTERS.SHOW_ALL)}> All </button>
            <button className={clazz} onClick={() => setFilter(FILTERS.SHOW_DONE)}> Done </button>
            <button className={clazz} onClick={() => setFilter(FILTERS.SHOW_IMPORTANT)}> Important </button>
            <button className={clazz} onClick={() => setFilter(FILTERS.SHOW_ACTIVE)}> Active </button>
        </div>
    );

};

const mapDispatchToProps = dispatch => {
    return{
        setFilter: filter => dispatch(setFilter(filter))
    }
};

export default connect(null, mapDispatchToProps)(Filter);

