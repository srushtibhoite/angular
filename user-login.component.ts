import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  title="Login Form";
  displayusername="";

  getValue(uname:string){
      this.displayusername=uname;
  
  }

}
