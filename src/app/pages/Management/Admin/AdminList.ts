import { Component } from '@angular/core';
import { ApiService } from './../../../services/api';


@Component({
selector:'adminList',
template:`
<NavBar></NavBar>
<div class="container">
  <h2>Admin Table Details</h2>
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
    <tbody>
      <tr>
        <td>John</td>
        <td>john@example.com</td>
        <td>123645987</td>
        <td>20</td>
        <td>Male</td>
        <td>Trainee</td>
        <button btn btn-xs><span class="glyphicon glyphicon-trash"></span></button>
      </tr>
      <tr>
        <td>Hari</td>
        <td>Hari123@example.com</td>
        <td>123645987</td>
        <td>27</td>
        <td>Male</td>
        <td>Trainee</td>
      </tr>
      <tr>
        <td>umar</td>
        <td>kumar@example.com</td>
        <td>6526598</td>
        <td>33</td>
        <td>Male</td>
        <td>Trainee</td>
      </tr>
    </tbody>
  </table>
</div>



`
})

export class AdminListClas{

  constructor(public api:ApiService){


  }

records:any={};

ngOnInit(){

  this.viewuserslist();

}


viewuserslist(){
    this.api.viewuserslist({}).then((res:any)=>{
        this.records=res;
    });
}

}
