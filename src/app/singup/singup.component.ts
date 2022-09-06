import { Component, OnInit } from '@angular/core';
import { Register } from './register';
import { UserRegisterService } from './user-register.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  register:Register = new Register();

  constructor(private userRegisterService:UserRegisterService) { }

  ngOnInit(): void {  
  }
  registerSignup(){
    console.log(this.register);
    this.userRegisterService.userRegisterRegister(this.register).subscribe(data=>{
      alert("Successfully Register")
    },error=>alert("Registration Fails")
    );
  }

}
