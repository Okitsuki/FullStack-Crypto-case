import React, { useState } from 'react'
import './mystyling/Addtodo.css'
export default function Addtodo(props) {
   const [title,setTitle] = useState("");
   const [desc,setdesc] = useState("");
   function submit(e){
       e.preventDefault();
       if(!title || !desc){
           alert("no title or desc");
       }
       else{
           props.addtodo(title,desc);
           setTitle("");
           setdesc("");
       }
   }
    return (
        <div className = "adderbox">
            <h2>Add Your Task Here</h2>
            <form className = "adder">
                
                <input type="text" value = {title} placeholder = "Task Name" onChange = {(e)=> {setTitle(e.target.value)}}/>
                {/* <input type="text" value = {desc} onChange = {(e)=> {setdesc(e.target.value)}}/> */}
                <textarea name="" placeholder = "Your Task Details" value = {desc} 
                onChange = {(e)=> {setdesc(e.target.value)}}id="WORK"
                 cols="50" rows="6"></textarea>
                <button onClick = {submit}>Add Todo</button>
            </form>
        </div>
    )
}
