import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myform:FormGroup;

  constructor(private _auth:AuthGuard , private _router:Router, private _user:UserService){

    this.myform = new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.email]),
      password: new FormControl(null,[Validators.required])
    }); 
    if(_auth.isLoggd)  _router.navigate(['/todos']);

  }


  onLogin(){
    if(!this.myform.valid)
      return;
    this._user.login(this.myform.value.email,this.myform.value.password);        
  }
}
