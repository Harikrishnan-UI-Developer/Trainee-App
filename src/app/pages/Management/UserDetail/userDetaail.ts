import  { Component } from '@angular/core';
import  { ApiService } from './../../../services/api';

@Component({
selector:'userDetail',
template:`
<NavBar></NavBar>
<div class="container">
   <div class="row">
      <div class="col-md-2">
         <ul class="list-group">
  <li class="list-group-item disabled">User&ndash;List</li>
  <li class="list-group-item" *ngFor="let val of arrayKeys(datas)">
  <a (click)="userview(datas[val].email)">{{datas[val].name}}</a>
  </li>
</ul>
      </div>
      <!-- {{updateRecord|json}} update record la irukura value json format la print aagum. -->
      <div class="col-md-10">
      <div *ngIf="updateRecord && updateRecord.name">
      <div class="panel panel-info">
         <div class="panel-heading">New Update</div>
         <div class="panel-body">

         <!-- on time la load aaguratha issue stop panna ngIf pottu irukom -->
         <form #userformDetail="ngForm"  class="myForm" (ngSubmit)="userdetailupdate(userformDetail)">
         <div class="row">
            <div class="col-md-6">
               <div class="md-form"><label>Name </label>
                  <input readonly disabled class="form-control" type="text"
                  [(ngModel)]="updateRecord.name" name="uname" #lname="ngModel" /><br>
               </div>
            </div>
            <div class="col-md-6">
               <div class="md-form">
                  <label class="control-label">Mobile Number</label>
                  <input disabled readonly  class="form-control" type="text"
                  [(ngModel)]="updateRecord.mobile" name="umobile" #lmnum="ngModel" /><br>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-6">
               <div class="md-form">
                <label class="control-label">Email id</label>
                  <input class="form-control" type="text"
                  [(ngModel)]="updateRecord.email" name="uemail" #lemail="ngModel" /><br>
               </div>
            </div>
            <div class="col-md-6">
               <div class="md-form">
                  <label class="control-label">Course</label>
                  <input readonly disabled class="form-control" type="text" [(ngModel)]="updateRecord.course" name="ucourse" #lcourse="ngModel" /><br>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-6">
               <div class="md-form"><label>Address line #1</label>
                  <input class="form-control" type="text" [(ngModel)]="address1" name="uaddr1" #laddr1="ngModel" /><br>
               </div>
            </div>
            <div class="col-md-6">
               <div class="md-form"><label>Address Line #2</label>
                  <input class="form-control" type="text" [(ngModel)]="address2" name="uaddr2" #laddr2="ngModel" /><br>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-6">
               <div class="md-form">
                  <label class="control-label">Batch-Type</label>
                  <select [(ngModel)]="batchtype" name="ubtype" #lbtype="ngModel" class="form-control selectpicker">
                  <option value="weekend">Week End</option>
                  <option value="weekdays">Week Days</option>
                  </select><br>
               </div>
            </div>
            <div class="col-md-6">
               <div class="md-form">
                  <label class="control-label">Batch-Timing</label>
                  <select [(ngModel)]="batchtiming" name="ubtiming" #lbtime="ngModel" class="form-control selectpicker">
                  <option value="weekend">Morning</option>
                  <option value="weekdays">Evening</option>
                  </select><br>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-6">
               <div class="md-form">
                  <label class="control-label">Trainer</label>
                  <select [(ngModel)]="trainer" name="uttype" #lttype="ngModel" class="form-control selectpicker">
                  <option value="ragu">Ragu</option>
                  <option value="ravi">Ravi</option>
                  <option value="hari">Hari</option>
                  <option value="vimal">Vimal</option>
                  </select><br>
               </div>
            </div>
            <div class="col-md-6">
               <div class="md-form">
                  <label class="control-label">Status</label>
                  <select [(ngModel)]="status" name="ustatustype" #lstatus="ngModel" class="form-control selectpicker">
                  <option value="active">Active</option>
                  <option value="inactive">inactive</option>
                  </select><br>
               </div>
            </div>
         </div>
         <button class="btn btn-md btn-primary center-block">Update It!!!</button><br>
         </form>
         <button class="btn btn-md btn-primary center-block">Cancel</button>
      </div>
      </div>
      </div>
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

// Vimal Pichandi this.api.updateUserdetails({
//   uemail: updateuserdetails.value.uemail,
//    upassword: updateuserdetails.value.upassword,
//   umaddress1: updateuserdetails.value.umaddress1                })

userdetailupdate(formdata:any){
    if(formdata.valid){
//console.log('updatedata',formdata);
//    console.log('Submitted',formdata.value);
       this.api.updaterec({
       uemail: formdata.value.uemail,
       uaddr1: formdata.value.uaddr1,
       uaddr2: formdata.value.uaddr2,
       ubtype: formdata.value.ubtype,
       ubtiming: formdata.value.ubtiming,
       uttype: formdata.value.uttype,
       ustatustype: formdata.value.ustatustype  }
     ).then((dat:any)=>{
              console.log('dat',dat);
        if(dat.status=="success"){
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
