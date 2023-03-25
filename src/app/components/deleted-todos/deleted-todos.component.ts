import { Component } from '@angular/core';
import { Todo } from 'src/app/Interfaces/Todo';
import { TodosService } from 'src/app/services/todos.service';

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
