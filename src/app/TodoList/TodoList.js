import React, { Component, Fragment } from 'react';

import TodoElement from './TodoElement/TodoElement';

class TodoList extends Component {
    render() {
        const { list, handleEditTodo, handleDeleteTodo } = this.props;
        return (
            <Fragment>
                {
                    list.map( (todo, index) => (
                        <TodoElement 
                            handleEditTodo={handleEditTodo} 
                            handleDeleteTodo={handleDeleteTodo}
                            key={index} 
                            index={index} 
                            todo={todo} 
                        />
                    ) )
                }
            </Fragment>
        );
    }
} 

export default TodoList;