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
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent {

  todos:Todo[];
  constructor(_completedTodo:TodosService){
    this.todos=_completedTodo.getCompletedTodo();
    console.log(_completedTodo.getPercentage());
    
  }
  
}
