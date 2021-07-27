import React from 'react'
// getting the todo as props for direct acesing
export default function TodoItem({todo,del}) {
    return (
        <div>
            {/* used the todos array on app.js  */}
            <h2>{todo.title}</h2>
            <h3>{todo.desc}</h3>
            {/* <button onClick = {del}>Delete</button> use this for del without any argument */}
            <button onClick = {() => del(todo)}>Delete</button>
           
           
        </div>
    )
}
