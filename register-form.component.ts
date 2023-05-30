import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  title="Registration Form";
  displayusername="";
  displayname="";
  displayemail="";
  displaymobileNo="";

  getValue(uname:string,fullname:string,email:string,mobileno:string){
      this.displayusername=uname;
      this.displayname=fullname;
      this.displayemail=email;
      this.displaymobileNo=mobileno;
  }



}
