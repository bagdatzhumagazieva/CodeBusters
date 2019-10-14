import React, { Component } from 'react';

import './TodoElement.css';

class TodoElement extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount(){
        this.setState({value: this.props.todo.text});
    }

    componentDidUpdate(prevProps){
        // to avoid infinite loop, set state in condition
        if( this.props.todo !== prevProps.todo ){
            this.setState({value: this.props.todo.text})
        }
    }

    handleEditClick = () => {
        const { todo, handleEditTodo, index } = this.props;
        todo.disabled = false;
        handleEditTodo( index, todo );
    }

    handleSaveClick = () => {
        const { todo, handleEditTodo, index } = this.props; 
        
        todo.disabled = true;
        todo.text = this.state.value;

        handleEditTodo( index, todo );
    }

    handleDoneClick = () => {
        const { todo, handleEditTodo, index } = this.props;
        todo.done = !todo.done;
        handleEditTodo(index, todo);
    }

    handleDeleteClick = () => {
        const { handleDeleteTodo, index } = this.props;
        handleDeleteTodo(index);
    }

    handleOnChange = e => {
        this.setState({value : e.target.value});
    }

    render() {

        const { todo } = this.props;
        const { value } = this.state;

        return (
            <div className={`TodoElement ${todo.done ? 'TodoElement--done' : ''} `} >
                <input 
                    className={`input ${todo.disabled ? 'input--disabled' : ''} `}  
                    value={value} 
                    disabled={todo.disabled} 
                    onChange={this.handleOnChange}
                />
                <div className="TodoElement__actions" >
                    { todo.disabled && !todo.done && <button onClick={this.handleEditClick} className="button" >Edit</button>}
                    { !todo.disabled && !todo.done && <button className="button" onClick={this.handleSaveClick} >Save</button>}
                    <button className="button" onClick={this.handleDeleteClick} >Delete</button>
                    
                </div>
            </div>
        );
    }
}

export default TodoElement;