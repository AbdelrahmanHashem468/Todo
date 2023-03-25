import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { User } from 'src/app/Interfaces/User';
import { TodosService } from 'src/app/services/todos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  todoPercentage:string='';
  user:User|undefined;
  constructor(private _user:UserService , protected _auth:AuthGuard , private _todos:TodosService){
    this._todos.compeletedPercentage$.subscribe(res => {
      this.todoPercentage = res
    })
    this.user=_user.currentUser;
    
  }
  ngDoCheck(){
    this.user=this._user.currentUser;
  }

  logout(){
  this._user.logout();
  }


}
