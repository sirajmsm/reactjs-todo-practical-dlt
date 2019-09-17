import React from 'react';
import TodoList from './TodoBody'

export class TODO extends React.Component{
    constructor(){
        super()
        this.state={
            title:"Welcome to TO-DO Application",
            todos:["run","walk"]
        }
        this.inputText =React.createRef();
        //this.addTodo = this.addTodo.bind(this)
    }
    titleSet(){
        let {title} = this.state;
        return(
            <h2>{title}</h2>
        )
    }
    toDOHeader(){
        return(
            <div><input ref={this.inputText} onKeyPress={this.keypressAddTodo.bind(this)}/><button onClick={this.addTodo.bind(this)}>submit</button></div>
        )
    }
    keypressAddTodo(event){
        //charCode===13
        if(event.key==='Enter'){
           this.addTodo();
        }
    }
    addTodo(){
        this.setState({
            todos:[...this.state.todos,this.inputText.current.value]
        });
        this.inputText.current.value="";
    }
  
    removeTodo(i){
        let {todos} = this.state;
        todos.splice(i,1);
        this.setState({
            todos:todos
        })

    }
    render(){
        let {todos} = this.state
      return(
            <div>
                 {this.titleSet()}
                 {this.toDOHeader()}
                 <TodoList todos={todos} mouseClick={this,this.removeTodo.bind(this)}/>
            </div>
      )
    }
}