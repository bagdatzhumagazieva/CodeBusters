import React, { Component } from 'react';

import './AddTodo.css';

class AddTodo extends Component {

    state = {
        value: '',
        isAdmin: true,
        someData: []
    }

    handleAddTodo = () => {
        let newTodo = { 
            text: this.state.value,
            done: false,
            disabled: true
        }
        this.props.onAdd(newTodo);
        this.setState({value: ''});
    }

    handleOnChange = e => {
        this.setState({value : e.target.value});
    }

    render() {
        return (
            <div className="AddTodo" >
                <input className="input" value={this.state.value} onChange={this.handleOnChange} />
                <button className="button" onClick={this.handleAddTodo} >Add</button>
            </div>
        );
    }
}

export default AddTodo;