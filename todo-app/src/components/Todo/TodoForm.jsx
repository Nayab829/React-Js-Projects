import React, { useState } from 'react'

const TodoForm = ({ onFormSubmit }) => {
    const [input, setInput] = useState({});
    const handleTaskAdd = (value) => {
        setInput({id: value, content: value, checked : false});
    };
    const addTask = (e) => {
        e.preventDefault();
        onFormSubmit(input);
        setInput({id: '', content: '', checked : false});

    }
    return (
        <section className="form">
            <form >
                <input type="text"
                    placeholder='Enter your tasks...'
                    value={input.content}
                    onChange={(event) => handleTaskAdd(event.target.value)} />
                <button type='submit' className='btn' onClick={(e) => addTask(e)}>Add</button>
            </form>
        </section>
    )
}

export default TodoForm
