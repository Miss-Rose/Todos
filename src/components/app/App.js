import React, {Component} from 'react';
import './App.css';
import Header from "../header";
import Form from "../form";
import List from "../list";
import changeValue from "../helpful_func/changeValue";
import createElement from "../helpful_func/createElement";
import Filter from "../filters";

class App extends Component {


    state = {
        initialList: [
            {id: 1, title: 'learn', important: true, done: false},
            {id: 2, title: 'walk', important: false, done: true},
            {id: 3, title: 'eat', important: true, done: false},
        ],
        filter: 'all',
        search: ''
    };

    onAddItem = (text) => {
        this.setState((state) => {
            const newItem = createElement(text);
            return {initialList: [...state.initialList, newItem]};
        })
    };

    onDeleteItem = (id) => {
        this.setState((state) => {
            const index = state.initialList.findIndex(i =>
                i.id === id);
            const initialList = [
                ...state.initialList.slice(0, index),
                ...state.initialList.slice(index + 1)
            ];
            return {initialList};
        })
    };

    onImportant = (id) => {
        this.setState((state) => {
            return changeValue(id, state.initialList, 'important');
        })
    };

    onDone = (id) => {
        this.setState((state) => {
            return changeValue(id, state.initialList, 'done');
        })
    };

    setFilter = (filter) => {
        this.setState({filter});
        console.log('file', filter);
    };

    filteredList = (list, filter) => {
        switch (filter) {
            case 'all' :
                return list;
            case 'active':
                return list.filter(i => !i.done);
            case 'done':
                return list.filter(i => i.done);
            case 'important':
                return list.filter(i => i.important);
            default:
                return list;
        }
    };


    render() {
        const {initialList, filter, search} = this.state;
        const filtered = this.filteredList(initialList, filter);
        return (
            <div className='container'>
                <Header/>

                <div className='col-8 align-content-center ml-auto mr-auto'>
                    <Form
                        search={search}
                        onAddItem={this.onAddItem}/>
                    <List
                        list={filtered}
                        onImportant={this.onImportant}
                        onDelete={this.onDeleteItem}
                        onDone={this.onDone}
                    />
                    <Filter
                        filter={filter}
                        onSetFilter={this.setFilter}
                    />
                </div>

            </div>
        );
    }
}

export default App;
