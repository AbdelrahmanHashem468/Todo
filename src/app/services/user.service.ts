import { Injectable } from '@angular/core';
interface User{
  id:number,
  name:string,
  quote:string,
  photo:string,
  date:Date
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User={
    id:1,
    name:'',
    quote:' ',
    photo:'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375__340.png',
    date: new Date("2019-01-16")
  };
  constructor() { 
  }

  setUser(name:string,quote:string){
    this.user.name=name;
    this.user.quote=quote;
  }
  getUser():User{
    return this.user;
  }
}
