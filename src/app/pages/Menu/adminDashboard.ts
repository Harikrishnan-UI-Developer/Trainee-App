import { Component } from '@angular/core';
import { ApiService } from './../../services/api';
@Component({
    selector:'Admintg',
    template:`
          <NavBar></NavBar>

          <div class="container-fluid"><span class="pull-right"><i class="glyphicon glyphicon-user"></i> Welcome, Admin</span></div>
          <div class="modal-dialog">
           <div class="modal-content">
               <div class="modal-header">
                 <h1 class="text-center">Admin Dashboard</h1>
               </div>
                <div class="modal-body">

                    <button [routerLink]="['/Registration/reigster']" class="btn btn-block btn-lg btn-primary">REGISTRATION</button><br>
                    <button class="btn btn-block btn-lg btn-info">ATTENTANCE</button><br>
                    <button class="btn btn-block btn-lg btn-success">FEEDBACK</button><br>
                    <button class="btn btn-block btn-lg btn-danger">ASSESMENT</button><br>
                    <button [routerLink]="['/course/courseList']" class="btn btn-block btn-lg" style="background-color:#ccc;">COURSE LIST</button><br>
                    <button [routerLink]="['/trainee/TraineeList']" class="btn btn-block btn-lg btn-warning" style="background-color:#666;">USER'S LIST</button><br>
                    
                </div>
           </div>
        </div>
    `,
    styles:[`




    `]

})

export class adminclas{

constructor( public api:ApiService){}

formRegi(regiForm:any){
    if(regiForm.valid){
    //  alert('Submitted....');
    console.log('Submitted',regiForm.value);
       this.api.register(regiForm.value).then( (res:any)=>{
        console.log('resss',res);
        if(res.status=="success"){
            alert('Register Success');
      }else{
        alert('Register Failed');
      }
     } )
    }

  }


}
