import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Todo } from 'src/app/Interfaces/Todo';
import { TodosService } from 'src/app/services/todos.service';
import { UserService } from 'src/app/services/user.service';

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

  ngDoCheck(){
    this.todos= this._todosService.getAllTodo();
  }

  addTodo(){
    this._todosService.addTodo(this.todoName);
    this.todoName='';
    console.log(this.todos);
    
  }
  update() {
    this.todos = this._todosService.getAllTodo()
  }
}
