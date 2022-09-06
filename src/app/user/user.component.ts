import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from './loginuser.service';
import { Userl } from './userl';
// declare const myfun:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userl:Userl =new Userl();


  constructor(private loginuserservice: LoginuserService, private router: Router) { }
 

  ngOnInit(): void {
  }
  userlLogin(){
    console.log(this.userl)
    this.loginuserservice.loginuser(this.userl).subscribe(data=>{
      alert("User login successfully")
    },error=>alert("Enter valid credential"));
    
  }

  public admin(){
    this.router.navigate(["signup"]);
  }

}
