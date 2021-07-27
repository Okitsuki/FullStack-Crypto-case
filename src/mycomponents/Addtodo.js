import React, { useState } from 'react'
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
        <div>
            <form action="">
                <input type="text" value = {title} onChange = {(e)=> {setTitle(e.target.value)}}/>
                <input type="text" value = {desc} onChange = {(e)=> {setdesc(e.target.value)}} />
                <button onClick = {submit}>Add Todo</button>
            </form>
        </div>
    )
}
