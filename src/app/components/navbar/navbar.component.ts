import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TodosService } from 'src/app/services/todos.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  todoPercentage:string;
  constructor(protected _user:UserService , protected _auth:AuthGuard , private _todos:TodosService){
    this.todoPercentage=_todos.getPercentage().toFixed(2);
  }

}
