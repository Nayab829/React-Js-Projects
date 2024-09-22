import React, { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';
import { getLocalTodos, setLocalTodos } from './LocalStoragrTodo';

const Todo = () => {
    const [todos, setTodos] = useState(() => getLocalTodos());
    //todo add todo functionality
    const addTask = (input) => {
        const { id, content, checked } = input;
        if (!content) return;
        const isTodoMatched = todos.find((currelem) => currelem.content === content);
        if (isTodoMatched) return;

        setTodos([...todos, { id, content, checked }])
    }
    //todo delete 
    const handleDelete = (value) => {
        const filteredTodos = todos.filter((currelem) => currelem.content !== value)
        setTodos(filteredTodos)
    }
    //todo all delete functionality
    const handleDeleteAll = () => {
        setTodos([]);
    }

    //todo toggle todo functionality
    const handleToggleTodo = (value) => {
        console.log(value);
        const updatedTodo = todos.map((currelem) => {
            if (currelem.content === value) {
                return { ...currelem, checked: !currelem.checked }
            } else {
                return currelem;
            }
        })
        setTodos(updatedTodo);

    }
    //todo set local storage
    setLocalTodos(todos);
    return (
        <>
            <div className="container">
                <header>
                    <h1>Todo Application with react js</h1>
                    <TodoDate />
                </header>
                <TodoForm
                    onFormSubmit={addTask} />
                <div className="list">
                    <ul>
                        {
                            todos.map((currTask) => {
                                return <TodoList
                                    key={currTask.id}
                                    data={currTask.content}
                                    checked={currTask.checked}
                                    onHandleDelete={handleDelete}
                                    onToggleTodo={handleToggleTodo}
                                />
                            })
                        }
                    </ul>
                    <button className="btn clearBtn"
                        onClick={() => handleDeleteAll()

                        }>Clear All</button>
                </div>
            </div>
        </>
    )
}
export default Todo







