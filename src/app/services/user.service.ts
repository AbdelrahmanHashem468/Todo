import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[];
  currentUser:User|undefined;
  constructor(private _auth:AuthGuard,private _route:Router) { 
    this.users = JSON.parse(localStorage.getItem('users')||'');

  }

  
login(email:string,password:string){
  this.currentUser=this.users.find(user => user.email===email && user.password===password);
  if(!this.currentUser){
    this._route.navigate(['/register']);
    return;
  }
  this._auth.isLoggd = true ;
  this._route.navigate(['/todos']);
};

register(name:string,email:string,password:string){
  let user =this.users.find(user => user.email === email );
  if(user){
    this._route.navigate(['/register']);
    return;
  }
  let id:number = this.users.length ? this.users[this.users.length-1].id+1 : 1; 
  this.users.push({
    id,
    name,
    email,
    password,
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGF-Uwt2WCkYohFMDI6Jf5cs5YxdzHXgFYIg&usqp=CAU",
    date: new Date()
    });
  this._route.navigate(['/todos']);
  this.commit();
};

logout(){
  this._auth.isLoggd = false ;
  this.currentUser=undefined;
  this._route.navigate(['/login']);
}

commit(){
  localStorage.setItem('users',JSON.stringify(this.users));
}
}
