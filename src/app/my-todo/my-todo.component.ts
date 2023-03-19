import { Component } from '@angular/core';
interface Todo {
  id:number,
  todo:string,
  completed:boolean
};
@Component({
  selector: 'app-my-todo',
  templateUrl: './my-todo.component.html',
  styleUrls: ['./my-todo.component.css']
})
export class MyTodoComponent {
  mytitle:string="MyTodo";
  todoName:string='';
  todos:Todo[]=
  [
    {"id":1,"todo":"Do something nice for someone I care about","completed":true},
    {"id":2,"todo":"Memorize the fifty states and their capitals","completed":false},
    {"id":3,"todo":"Watch a classic movie","completed":true},
    {"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","completed":false},
    {"id":27,"todo":"Have a photo session with some friends","completed":false},
    {"id":28,"todo":"Go to the gym","completed":false},
    {"id":29,"todo":"Make own LEGO creation","completed":true},
    {"id":30,"todo":"Take cat on a walk","completed":false}
  ]

  addTodo(){
    let id:number = this.todos[this.todos.length-1].id+1; 
    if(this.todoName.trim().length==0)
      return;   
    this.todos.push({
      "id":id,
      "todo":this.todoName,
      "completed":false,
    });
    console.log(id);
    
    this.todoName='';
  }

  deleteTodo(id:number){
    /*
    let todo:any = this.todos.find((todo)=>todo.id===id);
    let index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    */
   this.todos=this.todos.filter(todo => todo.id !== id);
  }

  changeStatus(id:number){
    let todo:Todo|undefined = this.todos.find((todo)=>todo.id===id);
    if(typeof todo == 'undefined')
      return;
    todo.completed=!todo.completed;
    
  }

}
