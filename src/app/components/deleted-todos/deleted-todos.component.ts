import { Component } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
interface Todo {
  id:number,
  todo:string,
  isCompleted:boolean,
  isDeleted:boolean,
  isFavourite:boolean,
  userId:number
};
@Component({
  selector: 'app-deleted-todos',
  templateUrl: './deleted-todos.component.html',
  styleUrls: ['./deleted-todos.component.css']
})
export class DeletedTodosComponent {

  todos:Todo[];
  constructor(_deletedTodo:TodosService){
    this.todos=_deletedTodo.getDeletedTodo();
  }
}
