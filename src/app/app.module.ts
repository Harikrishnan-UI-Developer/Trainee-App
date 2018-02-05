import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api';
import { AppComponent } from './app.component';

// Login Pages
import { loginclas } from './../app/pages/Login/login';
import { TraineeLoginclas } from './../app/pages/Login/traineeLogin';
import { Trainerloginclas } from './../app/pages/Login/trainerLogin';

import { NavBarClas } from './../app/pages/NavBar/Nav-Bar';
import { registrationclas } from './../app/pages/Registration/registration';
import { RegistrationAtten } from './../app/pages/Attendance/Registration.Attendance';

// DashBoard
import { adminclas } from './../app/pages/Menu/adminDashboard';
import { TraineeDashboradclas } from './../app/pages/Menu/traineeDashboard';
import { TrainerDashboardClas } from './../app/pages/Menu/trainerDashboard';

// List of Admin, Trainee, Trainer, course
import { AdminListClas } from './../app/pages/Management/Admin/AdminList';
import { TrainerListClas } from './../app/pages/Management/Trainer/TrainersList';
import { TraineeListClas } from './../app/pages/Management/Trainee/TraineeList';
import { courseClas } from './../app/pages/Management/Course/course';
import { userDetailclas } from './../app/pages/Management/UserDetail/userDetaail';
// routing pages
const appRoutes: Routes = [

  { path: 'Registration/reigster', component: registrationclas},
  { path: 'Registration/Attendance', component:RegistrationAtten},
  //Dashboard
  { path: 'Dashboard/Admin', component:adminclas},
  { path: 'Dashboard/Trainee', component:TraineeDashboradclas},
  { path: 'Dashboard/Trainer', component:TrainerDashboardClas},
  // login page
  { path: 'login', component: loginclas },
  { path: 'login/Trainee', component:TraineeLoginclas},
  { path: 'login/Trainer', component:Trainerloginclas},
  // list of admin, trainee, trainer, Courselist
  { path: 'admin/AdminList', component:AdminListClas },
  { path: 'trainee/TraineeList', component:TraineeListClas },
  { path: 'trainer/TrainerList', component:TrainerListClas },
  { path: 'course/courseList', component:courseClas},
  { path: 'user/userdetail', component:userDetailclas},
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent, loginclas, NavBarClas, registrationclas, RegistrationAtten, adminclas,
    TraineeDashboradclas, TrainerDashboardClas, TraineeLoginclas, Trainerloginclas, AdminListClas,
    TraineeListClas, TrainerListClas, courseClas, userDetailclas
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot( appRoutes,
     { enableTracing: false, useHash:false} // <-- debugging purposes only
   ) ],
  providers: [ ApiService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
