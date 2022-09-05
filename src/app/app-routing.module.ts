import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { SingupComponent } from './singup/singup.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { PriorityLevelComponent } from './priority-level/priority-level.component';
import { TaskCancellationComponent } from './task-cancellation/task-cancellation.component';
import { TaskDeadlineSettingComponent } from './task-deadline-setting/task-deadline-setting.component';
import { TaskDetailsCheckComponent } from './task-details-check/task-details-check.component';
// import { FeedbackComponent } from './user/feedback 1/feedback.component';
// import { UsersidebarComponent } from './user/usersidebar/usersidebar.component';
import { AdministersbookedComponent } from './adminpage/administersbooked/administersbooked.component';
import { CancellationComponent } from './adminpage/cancellation/cancellation.component';
import { ViewUserDataComponent } from './view-user-data/view-user-data.component';
import { FeedbackviewandreplyComponent } from './adminpage/feedbackviewandreply/feedbackviewandreply.component';






const routes: Routes = [
  {path: 'admin', component: AdminpageComponent, children:[
    {path: 'administersbooked', component: AdministersbookedComponent},
    {path: 'cancellation', component: CancellationComponent},
    {path: 'viewUserData', component: ViewUserDataComponent},
    {path: 'feedbackviewandreply', component: FeedbackviewandreplyComponent},
  ]

  
},  


  {path: 'home', component: HomeComponent},

  {path: 'user', component: UserComponent,pathMatch: 'full', children:[
    // {path: 'usersidebar', component: UsersidebarComponent},
    {path: 'add-task', component: AddTaskComponent},
    {path: 'edit-task', component: EditTaskComponent},
    {path: 'priority-level', component: PriorityLevelComponent},
    {path: 'task-cancellation', component: TaskCancellationComponent},
    {path: 'task-deadline-setting', component: TaskDeadlineSettingComponent},
    {path: 'task-details-check', component: TaskDetailsCheckComponent},
    //  {path: 'feedback 1', component: FeedbackComponent},
  ] 
},

  {path: 'feedback', component: FeedbackComponent},
  {path: 'about', component: AboutComponent},
  {path: 'signup', component: SingupComponent,pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
