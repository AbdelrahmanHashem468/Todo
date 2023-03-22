import { Component } from '@angular/core';
import { TodosService } from '../../services/todos.service';
interface Todo {
  id:number,
  todo:string,
  isCompleted:boolean,
  isDeleted:boolean,
  isFavourite:boolean,
  userId:number
};
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
