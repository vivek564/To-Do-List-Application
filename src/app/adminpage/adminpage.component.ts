import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { LoginadminService } from '../loginadmin.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  admin:Admin =new Admin();

  constructor(private loginadminservice: LoginadminService) { }

  ngOnInit(): void {
  }
  adminLogin(){
    console.log(this.admin)
    this.loginadminservice.loginAdmin(this.admin).subscribe(data=>{
      alert("Login Successfully")
    },error=>alert("Enter valid credentials")
    );

  }

}
