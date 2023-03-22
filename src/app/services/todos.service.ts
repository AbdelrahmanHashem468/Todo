import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
interface Todo {
  id:number,
  todo:string,
  isCompleted:boolean,
  isDeleted:boolean,
  isFavourite:boolean,
  userId:number
};
@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor( private route:Router){

  }

  todos:Todo[]=
  [
    {"id":1,"todo":"Do something nice for someone I care about","isCompleted":true,"isDeleted":false,"isFavourite":false,"userId":1},
    {"id":2,"todo":"Memorize the fifty states and their capitals","isCompleted":true,"isDeleted":false,"isFavourite":false,"userId":1},
    {"id":3,"todo":"Watch a classic movie","isCompleted":true,"isDeleted":false,"isFavourite":true,"userId":1},
    {"id":4,"todo":"Contribute code or a monetary donation to an open-source software project","isCompleted":false,"isDeleted":true,"isFavourite":true,"userId":1},
    {"id":27,"todo":"Have a photo session with some friends","isCompleted":true,"isDeleted":false,"isFavourite":true,"userId":1},
    {"id":28,"todo":"Go to the gym","isCompleted":true,"isDeleted":false,"isFavourite":false,"userId":1},
    {"id":29,"todo":"Make own LEGO creation","isCompleted":true,"isDeleted":true,"isFavourite":true,"userId":1},
    {"id":30,"todo":"Take cat on a walk","isCompleted":false,"isDeleted":false,"isFavourite":false,"userId":1}
  ]

  getAllTodo(){
    return this.todos.filter(todo => !todo.isDeleted );
  }

  getDeletedTodo(){
    return this.todos.filter(todo => todo.isDeleted );
  }

  getFavouriteTodo(){
    return this.todos.filter(todo => todo.isFavourite );
  }

  getCompletedTodo(){
    return this.todos.filter(todo => todo.isCompleted && !todo.isDeleted );
  }

  getPercentage(){
    return (this.getCompletedTodo().length/this.getAllTodo().length)*100;
  }
  deleteTodo(id:number){
    console.log(this.todos.find(todo=>todo.id===id));

    this.todos.map((todo) => {
        if(todo.id===id)
          todo.isDeleted=true;
    });
    console.log(this.todos.find(todo=>todo.id===id)); 
  }

  addToFavourite(id:number){
    this.todos.map((todo) => {
        if(todo.id===id)
          todo.isFavourite=true;
    });
    //this.route.navigate(['/login']);
  }

  completeTodo(id:number){
    this.todos.map((todo) => {
        if(todo.id===id)
          todo.isCompleted=!todo.isCompleted;
    });
  }

}
