import React from 'react'
import TodoItem from './TodoItem'
import "./mystyling/Todos.css"
export default function Todos(props) {
    return (
        <div className = "container">
            {
             props.todo.length ===0 ?(<h3 className = "todohead">All Your Todo's Will be Here</h3>)
             : (<h3 className = "todohead">Your Tasks</h3>)
            }
            {/* using the todos here can use for loop to do this */}
           { props.todo.map((index) => {
               return <TodoItem  todo = {index} 
               key = {index.sno} del ={props.ondelete}/>
            })}     
                   
        </div>         
    )             
               
            
            
            
           
        
    
}
