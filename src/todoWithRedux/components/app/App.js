import React from 'react';
import Header from "../header";
import InputForm from "../input";
import TodoList from "../todo-list";
import Filter from "../filters";
import {createStore} from "redux";
import rootReducer from "../../redux/reducers/rootReducer";
import {Provider} from "react-redux";

const store = createStore(rootReducer);

const AppR = () => (
    <div className='container'>
        <Header/>
        <div className='col-8 align-content-center ml-auto mr-auto'>
            <Provider store={store}>
                <InputForm/>
                <TodoList/>
                <Filter/>
            </Provider>
        </div>
    </div>
);

export default AppR;