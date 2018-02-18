import { Component } from '@angular/core';
import { ApiService } from './../../services/api';
@Component({
  selector:'registrate',
  template:`
  <NavBar></NavBar>



  <div class="container">
  <div class="panel panel-info">
     <div class="panel-heading">New Trainee</div>
     <div class="panel-body">
        <form #loginForm="ngForm" class="myform form-horizontal" id="contact_form" (ngSubmit)=loginformRegister(loginForm)>
           <div class="form-group">
              <label class="col-md-4 control-label">Student Name</label>
              <div class="col-md-4">
                 <input [(ngModel)]="name" name="uname" #lname="ngModel" placeholder="Name" class="form-control"  type="text">
              </div>
           </div>

           <div class="form-group">
              <label class="col-md-4 control-label" >Eamil Id</label>
              <div class="col-md-4">
               <input [(ngModel)]="email" name="uemail" #lemail="ngModel" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" class="form-control " placeholder="Email"/>
               <span *ngIf="lemail.touched && lemail.invalid" class="error">
                 Email error!
               </span>
           </div>
           </div>

           <div class="form-group">
              <label class="col-md-4 control-label" >Password</label>
              <div class="col-md-4">
               <input type="password" [(ngModel)]="password" placeholder="Password" name="upassword" #lpassword="ngModel" class="form-control" required />
               <span *ngIf="lpassword.touched && lpassword.invalid" class="error">
                  Password error!
               </span>
           </div>
           </div>

           <div class="form-group">
              <label class="col-md-4 control-label" >Age</label>
              <div class="col-md-4">
                 <input [(ngModel)]="age" name="uage" #lage="ngModel" class="form-control"  type="text">
              </div>
           </div>
           <div class="form-group">
              <label class="col-md-4 control-label">Gender</label>
              <div class="col-md-4 selectContainer">
                 <select [(ngModel)]="gender" name="ugender" #lgender="ngModel" class="form-control selectpicker">

                    <option value="male">Male</option>
                    <option value="female">Female</option>
                 </select>
              </div>
           </div>

           <div class="form-group">
              <label class="col-md-4 control-label">Type</label>
              <div class="col-md-4 selectContainer">
                 <select [(ngModel)]="type" name="utype" #ltype="ngModel" class="form-control selectpicker">
                    <option value='admin'>Admin</option>
                    <option value='trainee'>Trainee</option>
                    <option value='trainer'>Trainer</option>
                 </select>
              </div>
           </div>

           <div class="form-group">
              <label class="col-md-4 control-label">Mobile</label>
              <div class="col-md-4">
                 <input [(ngModel)]="mobile" name="umobile" #lmobile="ngModel" placeholder="Mobile Number" class="form-control"  type="text">
              </div>
           </div>

           <div class="form-group">
              <label class="col-md-4 control-label" >Course Name</label>
              <div class="col-md-4">
                 <input [(ngModel)]="course" name="ucourse" #lcourse="ngModel" placeholder="Course Name" class="form-control"  type="Text">
              </div>
           </div>
            <div class="col-md-4 center-block"><button class="btn btn-success">Register</button> </div> <br>
            <div class="col-md-4 center-block"><button [routerLink]="['/Registration/Attendance']" class="btn btn-success center-block">Register With Attendance</button></div>
        </form>
     </div>
  </div>



  `,
  styles:[`

    input,button{
        padding: 3px; margin:3px; border: 1px solid silver;
      }
      .error{ color: red; }
      .myForm .ng-touched.ng-invalid{
        border-left: 3px solid red;
      }
      .myForm .ng-touched.ng-valid{
        border-left: 3px solid green;
      }
  `]
})


export class registrationclas{

constructor( public api:ApiService){}

loginformRegister(loginForm:any){
  //alert('click');
    if(loginForm.valid){
    //  alert('Submitted....');
    console.log('Submitted',loginForm.value);
       this.api.register(loginForm.value).then((res:any)=>{
              console.log('resss',res);
        if(res.status=="success"){
              alert('Register Success');
      }else{
        alert('Register Failed');
      }
     })
    }
    else{
      alert('Registration form not valid');
    }

  }

}
