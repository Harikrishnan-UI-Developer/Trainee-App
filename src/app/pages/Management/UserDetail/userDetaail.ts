import  { Component } from '@angular/core';
import  { ApiService } from './../../../services/api';

@Component({
selector:'userDetail',
template:`

<NavBar></NavBar>

<div class="container">
  <div class="row">
      <div class="col-md-4">
      <table class="table">
      <thead>
        <tr>
        <th>User&ndash;List</th>
        </tr>
      </thead>
<tbody *ngFor="let val of arrayKeys(datas)">
   <tr>
     <td><button (click)="userview(datas[val].email)" class="btn btn-md">{{datas[val].name}}</button></td>
   </tr>
  </tbody>
</table>
      </div>
{{updateRecord|json}}

<div class="col-md-8" *ngIf="updateRecord && updateRecord.name">
        <form #userformDetail="ngForm"  class="myForm" (ngSubmit)="userFormsubmit(userformDetail)">
            <label>Name </label>
            <input readonly  class="form-control" type="text"
            [(ngModel)]="updateRecord.name" name="uname" #lname="ngModel" /><br>
            <label class="control-label">Mobile Number</label>
            <input readonly  class="form-control" type="text"
            [(ngModel)]="updateRecord.mobile" name="umnum" #lmnum="ngModel" /><br>


            <!-- label>Address line #1</label>
            <input class="form-control" type="text" [(ngModel)]="addr" name="uaddr" #laddr="ngModel" /><br>
            <label>Address Line #2</label>
            <input class="form-control" type="text" [(ngModel)]="addr" name="uaddr" #laddr="ngModel" /><br>
            <label class="control-label">Course</label>
               <select [(ngModel)]="cname" name="coursename" #lcname="ngModel" class="form-control selectpicker">
                  <option selected >Select your Course</option>
                  <option value="angular 1">Angular 1</option>
                  <option value="angular 2">Angular 2</option>
                  <option value="angular 3">Angular 3</option>
                  <option value="angular 4">Angular 4</option>
                  <option value="angular 5">Angular 5</option>
                  <option value="angular 6">Angular 6</option>
               </select><br>
            <label>Batch</label>
            <input class="form-control" type="text" [(ngModel)]="name" name="uname" #lname="ngModel" /><br>
            <label class="control-label">Batch-Type</label>
               <select [(ngModel)]="btype" name="batchtype" #lbtype="ngModel" class="form-control selectpicker">
                  <option value="">Select your Batch Type</option>
                  <option value="weekend">Week End</option>
                  <option value="weekdays">Week Days</option>
               </select><br>
             <label class="control-label">Batch-Timing</label>
                <select [(ngModel)]="btiming" name="batchtiming" #lbtime="ngModel" class="form-control selectpicker">
                   <option value="">Select your Batch Time</option>
                   <option value="weekend">Morning</option>
                   <option value="weekdays">Evening</option>
                </select><br>
                <label class="control-label">Trainer</label>
                   <select [(ngModel)]="btype" name="batchtype" #lbtype="ngModel" class="form-control selectpicker">
                      <option value="">Select your Batch Type</option>
                      <option value="ragu">Ragu</option>
                      <option value="ravi">Ravi</option>
                      <option value="hari">Hari</option>
                      <option value="vimal">Vimal</option>
                   </select><br>
               <label class="control-label">Status</label>
                  <select [(ngModel)]="btype" name="batchtype" #lbtype="ngModel" class="form-control selectpicker">
                     <option value="">Select your Batch Type</option>
                     <option value="active">Active</option>
                     <option value="inactive">inactive</option>
                  </select><br -->
                <button class="btn btn-md btn-primary center-block" (click)="userdetailupdate()">Update It!!!</button>
                <button class="btn btn-md btn-primary center-block" (click)="cancelupdate()">Cancel</button>
        </form>
      </div>
    </div>
</div>
`,

styles:[`

  `]
})

export class userDetailclas{

//public butclk:boolean=false;
public datas:any={};

constructor(public api:ApiService){


}

ngOnInit(){

  this.viewuserNamelist();
  //this.userview(value);
}

arrayKeys(obj:any){
  return Object.keys(obj);
}


viewuserNamelist(){

console.log('viewuserNamelist');

this.api.viewusersNameLists({}).then(res=>{
this.datas= res;
});
}

updateRecord:any;
userview(mail){

  this.api.finduserrecord({"email":mail}).then((res:any)=>{

  this.updateRecord=res[0];
  //this.viewuserNamelist();
});
}
}
