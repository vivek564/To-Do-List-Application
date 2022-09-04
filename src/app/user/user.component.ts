import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// declare const myfun:any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private router : Router) { }
  // callfun() {
  //   myfun();
  // }

  ngOnInit(): void {
  }
  public admin(){
    this.router.navigate(["signup"]);
  }

}
