import React from 'react';
import logo from './logo.svg';
import Todo from './Todo';
import './App.css';

class App extends React.Component{
  constructor(){
    super();

    this.state={
      todos:[]
    }


    this.textInput = React.createRef();
    
  }


  addTodo(){
    this.setState({
      todos:[...this.state.todos,this.textInput.current.value]
    })

    this.textInput.current.value="";
  }

  removeTodo(i){
  
   let todos =this.state.todos;
   todos.splice(i,1);
  
   this.setState({
     todos:todos
   })



  }
  render(){
    return(
      <div>
        <div>
          <input ref={this.textInput}/>
          <button onClick={this.addTodo.bind(this)}>add</button>
        </div>
         <div>
           {this.state.todos.map((todo,index)=>(
             <Todo todo={todo} mouseClick={this.removeTodo.bind(this,index)}/>
           ))}
         </div>
      </div>
    )
  }
}
export default App;
