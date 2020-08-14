import React, {Component} from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';
class Form extends Component {

    state = {
        text: ''
    };

    onTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    submitForm = (e) => {
        e.preventDefault();
        const {text} = this.state;
        this.setState({text: ''});
        this.props.onAddItem(text);
    };

    render() {
        return (

            <InputGroup className="mb-3">
                <form className="d-flex"
                    onSubmit={this.submitForm}>
                    <FormControl
                        type='text'
                        placeholder="add new item"
                        aria-describedby="basic-addon2"
                        value={this.state.text}
                        onChange={this.onTextChange}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" type='submit'>Add</Button>
                    </InputGroup.Append>
                </form>
            </InputGroup>
        );
    }
}

export default Form;