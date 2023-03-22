import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TodosService } from 'src/app/services/todos.service';
import { UserService } from 'src/app/services/user.service';
interface Todo {
  id:number,
  todo:string,
  isCompleted:boolean,
  isDeleted:boolean,
  isFavourite:boolean,
  userId:number
};
@Component({
  selector: 'app-my-todo',
  templateUrl: './my-todos.component.html',
  styleUrls: ['./my-todos.component.css']
})
export class MyTodoComponent {

  mytitle:string="MyTodo";
  todoName:string='';
  todos:Todo[];
  
  constructor(private _authGuard :AuthGuard, private _todosService:TodosService, protected _user:UserService) {
    this.todos= _todosService.getAllTodo();
  }

  addTodo(){
    let id:number = this.todos[this.todos.length-1].id+1; 
    if(this.todoName.trim().length==0)
      return;   
    this.todos.push({
      "id":id,
      "todo":this.todoName,
      isCompleted:false,
      isDeleted:true,
      isFavourite:false,
      userId:1
    });
    this.todoName='';
  }
  update() {
    this.todos = this._todosService.getAllTodo()
  }
}
