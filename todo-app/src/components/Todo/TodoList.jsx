import React from 'react'

const TodoList = ({ onHandleDelete, data , checked, onToggleTodo}) => {
    return (

        <li >
            <span className={checked ? "checked" : "unchecked"}>{data}</span>
            <div>
                <button className={`btn`}
                onClick={()=> onToggleTodo(data)}>✔️</button>
                <button className="btn" onClick={() => onHandleDelete(data)}>✖️</button>
            </div>
        </li>
    )
}

export default TodoList
