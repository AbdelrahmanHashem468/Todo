import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';
import { MyTodoComponent } from '../my-todos/my-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo:any;
  @Output() deleted = new EventEmitter()
  constructor(private _todo:TodosService){
  }
  deleteTodo(id:number){
    this._todo.deleteTodo(id);
    this.deleted.emit("true");
  }

  addToFavourite(id:number){
    this._todo.addToFavourite(id);
  }
  completeTodo(id:number){
    this._todo.completeTodo(id);
  }

}
