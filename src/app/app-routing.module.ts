import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {path: 'admin', component: AdminpageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'user', component: UserComponent,pathMatch: 'full'},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signup', component: SingupComponent,pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
