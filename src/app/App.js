import React, { Component } from 'react';

import './App.css';

import AddTodo from './AddTodo/AddTodo';
import TodoList from './TodoList/TodoList';

class App extends Component{

    constructor(){
        super();

        this.state = {
            todos: []
        } 
    }

    handleAddNewTodo = todo => {
        this.setState((oldState) => {
            return { todos: [todo, ...oldState.todos] }
        });
    }

    handleEditTodo = (index, todo) => {
        let todos = [...this.state.todos];
        todos[index] = todo;

        this.setState({todos});
    }

    handleDeleteTodo = index => {
        let todos = [...this.state.todos];
        todos.splice(index, 1);

        this.setState({todos});
    }

    render(){

        const { todos } = this.state;

        return(
            <div className="App__wrapper" >
                <AddTodo onAdd={this.handleAddNewTodo} />
                <TodoList handleDeleteTodo={this.handleDeleteTodo} handleEditTodo={this.handleEditTodo} list={todos} />
            </div>
        );
    }
}

export default App;