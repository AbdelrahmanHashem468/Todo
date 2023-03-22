import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userQuote:string='';
  userName:string='';
  constructor(private _auth:AuthGuard , private _router:Router, private _user:UserService){
    if(_auth.isLoggd)
        _router.navigate(['/todos']);
  }
  onLogin(){
    if(this.userName.trim()===''|| this.userQuote.trim()==='')
      return;
    this._auth.isLoggd = true ;
    this._router.navigate(['/todos']);
    this._user.setUser(this.userName,this.userQuote);    
    
  }
}
