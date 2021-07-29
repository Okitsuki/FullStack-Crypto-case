import React from 'react'
import "./mystyling/Todoitem.css"
// getting the todo as props for direct acesing
export default function TodoItem({todo,del}) {
    return (
        <div className = "todo-item">
            {/* used the todos array on app.js  */}
            <h2 id = "todo-name">{todo.title}</h2>
            <div className="todo-detail">{todo.desc}</div>
            <button id = "todo-delete"
             onClick = {() => del(todo)}>Delete</button>
           
           
        </div>
    )
}
