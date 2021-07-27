// import logo from './logo.svg';
import Header from "./mycomponents/Header";
import Todos from "./mycomponents/Todos";
import Footer from "./mycomponents/Footer";
import Addtodo from "./mycomponents/Addtodo";
import About from "./mycomponents/About";
import React, { useState , useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  let intodos;
  if(localStorage.getItem("todos") === null){
    intodos = [];
  }
  else{
    intodos = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos,setTodos] = useState (intodos);
  function addtodo(title,desc){
    console.log("This is title:",title);
    console.log("This is desc:",desc);
    let sno;
    if(todos.length !== 0){
     sno = todos[todos.length -1].sno + 1;
    }
    else{
       sno = 1;
    }
    const newtodo = {
      sno : sno,
      title : title,
      desc : desc
    }
    setTodos([...todos,newtodo]);
   
    
  }
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   
  }, [todos])
  
   function indelete(todo){
    console.log("Delete it",todo);
    // let i = todos.indexOf(todo);
    // todos.splice(i,1); deleting the array this wy won't work
    setTodos(todos.filter((e)=> {
      return e!== todo;
    })); 
   
  }
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   
  }, [todos])
   return (
    <div className="App">
      <Router>
      <Header title = "My First React.JS App" para = {false} />
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route exact path="/" render ={()=>{
            return (
              <>
               <Addtodo addtodo = {addtodo}/>
               {/* accessing the todos array */}
                <Todos todo = {todos} ondelete = { indelete}/> 
              </>
            )
          }}>
           
          </Route>
        </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
