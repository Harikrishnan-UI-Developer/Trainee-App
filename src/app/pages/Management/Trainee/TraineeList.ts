import { Component } from '@angular/core';
import { ApiService } from './../../../services/api';

@Component({
selector:'TraineeList',
template:`
<NavBar></NavBar>
<div class="container col-md-8">
  <h2>Trainee Table Details</h2>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody *ngFor="let key of arrayKeys(records)">
      <tr>
        <td>{{records[key].name}}</td>
        <td>{{records[key].email}}</td>
        <td>{{records[key].mobile}}</td>
        <td>{{records[key].age}}</td>
        <td>{{records[key].gender}}</td>
        <td>{{records[key].type}}</td>
        <button class="btn btn-xs" (click)="deleteuserlist(records[key].email)"><span class="glyphicon glyphicon-trash"></span></button>
      </tr>
      </tbody>
  </table>
</div>


<div class="col-md-4">


</div>
`



})

export class TraineeListClas{
  records:any={};

  constructor(public api:ApiService){


  }




  ngOnInit(){

  this.viewuserslist();


  }


  deleteuserlist(getemail){
      this.api.deleteuserRecord({"email":getemail}).then((res:any)=>{
        this.records=res;
        this.viewuserslist();
      })


  }

  arrayKeys(obj:any){
    return Object.keys(obj);
  }
  viewuserslist(){
    console.log("Page-TRAINEEss")
    this.api.viewuserslist({}).then( (res:any)=>{
        this.records=res;

    })
  }


}
