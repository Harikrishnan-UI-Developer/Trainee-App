import { Component } from '@angular/core';
import { ApiService } from './../../../services/api';
@Component({
selector:'courseTg',
template:`
<NavBar></NavBar>
<div class="container">
   <div class="col-md-12">
      <div class="row">
         <form #courseform="ngForm" class="formCourse" (ngSubmit)="formcourseSub(courseform)">
         <label>Course Name</label>
         <input type="text" [(ngModel)]="cname" class="form-control" name="coursename" #lcname="ngModel"  />
         <!--  <span *ngIf="lemail.touched && lemail.invalid" class="error">
            Course Name Should Not Empty !!!
            </span>  -->
         <br><button class="btn btn-primary">Add Course</button>
         </form>
      </div>
   </div>
</div>
<div class="container">
   <div class="col-md-6 ">
      <div class="row">
         <!--  <div class="col-md-12">  -->
         <br><label>Course List</label>
         <!--  <div class="row"> -->
         <table class="table table-striped">
            <thead>
               <tr>
                  <th>Name</th>
               </tr>
            </thead>
            <tbody *ngFor="let val of arrayKeys(courserecord)">
               <tr>
                  <td>{{courserecord[val].name}}
                  <span class="pull-right glyphicon glyphicon-th-list"></span><span class="pull-right glyphicon glyphicon-trash"></span></td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
   <!-- </div>
      </div> -->



   <div class="col-md-6">

        <form #trainerList="ngForm" class="trainerForm">
            <div class="form group">
                <label class="control-label">Trainer's Class Detail</label>
                <select [(ngModel)]="tdetail" name="TrainerClassDetail" #lcname="ngModel" class="form-control selectpicker">
                  <option value="ragu">Ragu<option>
                  <option value="ravi">Ravi<option>
                  <option value="hari">Hari<option>
                  <option value="vimal">Vimal<option>
                </select>
            </div>
        </form>

        <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Course</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td><button class="btn btn-sm btn-info"><span class="glyphicon glyphicon-user"></span>view</button></td>
      </tr>
    </tbody>
  </table>


   </div>
</div>

`

})


export class courseClas{


public courserecord:any={};

constructor(public api:ApiService){



}

arrayKeys(obj:any){
  return Object.keys(obj);
}

formcourseSub(courseform:any){
  //alert('click');
    if(courseform.valid){
    //  alert('Submitted....');
    console.log('Submitted',courseform.value);
       this.api.Cregister(courseform.value).then((res:any)=>{
              console.log('resss',res);
        if(res.status=="Course added"){
          this.viewCourselist();
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

  ngOnInit(){

    this.viewCourselist();

  }


  viewCourselist(){
        console.log("courseList");
        this.api.courseList({}).then( (vres:any)=>{
            this.courserecord=vres;
        })
  }

}
