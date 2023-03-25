import { Component } from '@angular/core';
import { Todo } from 'src/app/Interfaces/Todo';
import { TodosService } from 'src/app/services/todos.service';

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
