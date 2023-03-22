import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(protected _auth:AuthGuard){

  }
}
