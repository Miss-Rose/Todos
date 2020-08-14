import React, {useState} from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import {addItem} from "../../redux/actionCreator/actionCreator-todo";
import {connect} from 'react-redux';

const InputForm = ({addItem}) => {

    const [value, setValue] = useState('');

    const submitForm = e => {
        e.preventDefault();
        if (!value) return;
        addItem(value);
        setValue('');
    };

    return (
        <InputGroup className="mb-3">
            <form className="d-flex"
                  onSubmit={submitForm}>
                <FormControl
                    type='text'
                    placeholder="add new item"
                    aria-describedby="basic-addon2"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <InputGroup.Append>
                    <Button variant="outline-success" type='submit'>Add</Button>
                </InputGroup.Append>
            </form>
        </InputGroup>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: text => dispatch(addItem(text))
    }
};

export default connect(null, mapDispatchToProps)(InputForm);