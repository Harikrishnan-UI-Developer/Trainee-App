import { Component } from '@angular/core';

@Component({
selector:'TrainerList',
template:`
<NavBar></NavBar>
<div class="container">
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

export class TrainerListClas{



}
