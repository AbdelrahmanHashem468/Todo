import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../Interfaces/Todo';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})

export class TodosService {
  todos:Todo[];

  compeletedPercentage = new BehaviorSubject('50.53');
  compeletedPercentage$=this.compeletedPercentage.asObservable();

  constructor( private route:Router,private _http: HttpClient,private _user:UserService){
       this.todos = JSON.parse(localStorage.getItem('todos')||'');
  }
  
  getAllTodo(){    
    return this.todos.filter(todo => todo.userId === this._user.currentUser?.id && !todo.isDeleted );
  }

  getDeletedTodo(){
    return this.todos.filter(todo => todo.userId === this._user.currentUser?.id &&  todo.isDeleted );
  }

  getFavouriteTodo(){
    return this.todos.filter(todo => todo.userId === this._user.currentUser?.id && todo.isFavourite );
  }

  getCompletedTodo() {
    return this.todos.filter(todo => todo.userId === this._user.currentUser?.id &&  todo.isCompleted && !todo.isDeleted );
  }

  getPercentage(){
    let pre:string=((this.getCompletedTodo().length/this.getAllTodo().length)*100).toFixed(2);
    this.compeletedPercentage.next(pre);
  }

  addTodo(todo:string){
    let id:number = this.todos.length ? this.todos[this.todos.length-1].id+1 : 1; 
    if(todo.trim().length==0)
      return;   
    this.todos.push({
      id,
      todo,
      isCompleted:false,
      isDeleted:false,
      isFavourite:false,
      userId:this._user.currentUser?.id || 1
    });
    this.commit();
  };




  deleteTodo(id:number){
    this.todos.map((todo) => {
        if(todo.id===id)
          todo.isDeleted=true;
    });
    this.commit();
  }

  addToFavourite(id:number){
    this.todos.map((todo) => {
        if(todo.id===id)
          todo.isFavourite=true;
    });
    this.commit();
  }

  completeTodo(id:number){
    this.todos.map((todo) => {
        if(todo.id===id)
          todo.isCompleted=!todo.isCompleted;
    });
    this.commit();
    this.getPercentage();
  }

  commit(){
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
}
