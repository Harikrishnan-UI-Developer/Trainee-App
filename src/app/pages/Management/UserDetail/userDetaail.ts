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
<!-- {{updateRecord|json}} update record la irukura value json format la print aagum. -->

<div class="col-md-8" *ngIf="updateRecord && updateRecord.name">   <!-- on time la load aaguratha issue stop panna ngIf pottu irukom -->

        <form #userformDetail="ngForm"  class="myForm" (ngSubmit)="userdetailupdate(userformDetail)">
            <label>Name </label>
            <input readonly disabled class="form-control" type="text"
            [(ngModel)]="updateRecord.name" name="uname" #lname="ngModel" /><br>  <!-- input la ngModel use panni iruntha (value="") ithuku kulla value ah ngmodel la than kudukanum   -->
            <label class="control-label">Mobile Number</label>
            <input disabled readonly  class="form-control" type="text"
            [(ngModel)]="updateRecord.mobile" name="umnum" #lmnum="ngModel" /><br>

            <label>Address line #1</label>
            <input class="form-control" type="text" [(ngModel)]="addr" name="uaddr1" #laddr1="ngModel" /><br>
            <label>Address Line #2</label>
            <input class="form-control" type="text" [(ngModel)]="addr" name="uaddr2" #laddr2="ngModel" /><br>
            <label class="control-label">Course</label>
            <input readonly disabled class="form-control" type="text" [(ngModel)]="updateRecord.course" name="ucourse" #lcourse="ngModel" /><br>
               <!-- <select [(ngModel)]="cname" name="coursename" #lcname="ngModel" class="form-control selectpicker">
                  <option value="angular 1">Angular 4</option>
                  <option value="angular 2">Php</option>
                  <option value="angular 3">Handoop</option>
                  <option value="angular 4">Javascript</option>
                  <option value="angular 5">Sap</option>
                  <option value="angular 6">Angular 6</option>
               </select><br> -->
           <label class="control-label">Batch-Type</label>
             <select [(ngModel)]="btype" name="batchtype" #lbtype="ngModel" class="form-control selectpicker">

                <option value="weekend">Week End</option>
                <option value="weekdays">Week Days</option>
             </select><br>
           <label class="control-label">Batch-Timing</label>
              <select [(ngModel)]="btiming" name="batchtiming" #lbtime="ngModel" class="form-control selectpicker">

                 <option value="weekend">Morning</option>
                 <option value="weekdays">Evening</option>
              </select><br>
              <label class="control-label">Trainer</label>
                 <select [(ngModel)]="btype" name="batchtype" #lbtype="ngModel" class="form-control selectpicker">

                    <option value="ragu">Ragu</option>
                    <option value="ravi">Ravi</option>
                    <option value="hari">Hari</option>
                    <option value="vimal">Vimal</option>
                 </select><br>
             <label class="control-label">Status</label>
                <select [(ngModel)]="btype" name="batchtype" #lbtype="ngModel" class="form-control selectpicker">

                   <option value="active">Active</option>
                   <option value="inactive">inactive</option>
                </select><br>
      </form>


        <button class="btn btn-md btn-primary center-block" (click)="userdetailupdate(userformDetail)">Update It!!!</button><br>
        <button class="btn btn-md btn-primary center-block" (click)="cancelupdate()">Cancel</button>

      </div>
    </div>
</div>
`,

styles:[`

  `]
})

export class userDetailclas{

//public butclk:boolean=false;
public datas:any ={};
public updateRecord:any ={};


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


userview(mail){

  this.api.finduserrecord({"email":mail}).then((res:any)=>{
  this.updateRecord=res[0];
  //this.viewuserNamelist();
});
}



userdetailupdate(datas:any){

console.log('datas',datas);
}
}
