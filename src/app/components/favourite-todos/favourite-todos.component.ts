import { Component } from '@angular/core';
import { Todo } from 'src/app/Interfaces/Todo';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-favourite-todos',
  templateUrl: './favourite-todos.component.html',
  styleUrls: ['./favourite-todos.component.css']
})
export class FavouriteTodosComponent {
  todos:Todo[];
  constructor(_favouriteTodo:TodosService){
    this.todos=_favouriteTodo.getFavouriteTodo();
  }
}
