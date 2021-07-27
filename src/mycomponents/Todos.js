import React from 'react'
import TodoItem from './TodoItem'
export default function Todos(props) {
    return (
        <div className = "container">
            <h3>I am the best</h3>
            {/* using the todos here can use for loop to do this */}
           { props.todo.map((index) => {
               return <TodoItem todo = {index} key = {index.sno} del ={props.ondelete}/>
                  
                   
                   
                   
               
            })}
            
            
           
        </div>
    )
}
