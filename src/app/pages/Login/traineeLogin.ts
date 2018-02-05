import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from './../../services/api';

@Component({
  selector:'Traineeloginpage',
  template:`
  <div class="modal-dialog">
   <div class="modal-content">
       <div class="modal-header">
         <h1 class="text-center">Welcome</h1>
       </div>
        <div class="modal-body">
        <form #loginForm="ngForm"  class="myForm" (ngSubmit)="loginformSubmit(loginForm)">
            <div class="form-group">
                <input [(ngModel)]="email" name="uemail" #lemail="ngModel" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" class="form-control input-lg" placeholder="Username"/>
                <span *ngIf="lemail.touched && lemail.invalid" class="error">
                  Email error !
                </span>
            </div>

            <div class="form-group">
                <input type="password" [(ngModel)]="password" name="upassword" #lpassword="ngModel" class="form-control input-lg" required />
                <span *ngIf="lpassword.touched && lpassword.invalid" class="error">
                   Password !
                </span>
            </div>

            <div class="form-group">
                <!-- <button [routerLink]="['/Menu/DashBoard']" class="btn btn-block btn-lg btn-primary"> Login </button> -->
                <button class="btn btn-block btn-lg btn-primary"> Login </button>
                <span [routerLink]="['/Registration/reigster']" class="pull-right"><a>Register</a></span>
                <span><a href="#">Forgot Password</a></span>
            </div>
            </form>
        </div>
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


export class TraineeLoginclas{

constructor(public api:ApiService){


}


loginformSubmit(loginFormData:any){
  console.log('hello');
if(loginFormData.valid){
      console.log('dataSubmitted',loginFormData.value);
      console.log('loginformvalid',loginFormData.valid);
      this.api.loginTrainee(loginFormData.value).then((res:any)=>{
          console.log('res',res);
          console.log('restype',res.status);
          if(res.status=="success") {
                console.log('trainee');
                window.location.href='/Dashboard/Trainee';
          }

      })
    }
}
}
