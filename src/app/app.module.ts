import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NanbarComponent } from './nanbar/nanbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AdminpageComponent } from './adminpage/adminpage.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { SingupComponent } from './singup/singup.component';
import { PriorityLevelComponent } from './priority-level/priority-level.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskDetailsCheckComponent } from './task-details-check/task-details-check.component';
import { TaskDeadlineSettingComponent } from './task-deadline-setting/task-deadline-setting.component';
import { TaskCancellationComponent } from './task-cancellation/task-cancellation.component';
import { ViewUserDataComponent } from './view-user-data/view-user-data.component';
import { NavComponent } from './user/nav/nav.component';
import { UsersidebarComponent } from './user/usersidebar/usersidebar.component';
import { AdminsidebarComponent } from './adminpage/adminsidebar/adminsidebar.component';
import { AdministersbookedComponent } from './adminpage/administersbooked/administersbooked.component';
import { ViewuserdataComponent } from './adminpage/viewuserdata/viewuserdata.component';
import { CancellationComponent } from './adminpage/cancellation/cancellation.component';
import { FeedbackviewandreplyComponent } from './adminpage/feedbackviewandreply/feedbackviewandreply.component';




@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    NanbarComponent,
    AdminpageComponent,
    HomeComponent,
    UserComponent,
    FeedbackComponent,
    AboutComponent,
    SingupComponent,
    PriorityLevelComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskDetailsCheckComponent,
    TaskDeadlineSettingComponent,
    TaskCancellationComponent,
    ViewUserDataComponent,
    NavComponent,
    UsersidebarComponent,
    AdminsidebarComponent,
    AdministersbookedComponent,
    ViewuserdataComponent,
    CancellationComponent,
    FeedbackviewandreplyComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatButtonModule,MatIconModule,MatFormFieldModule,MatCardModule,MatInputModule,FlexLayoutModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class CustomModule { }
