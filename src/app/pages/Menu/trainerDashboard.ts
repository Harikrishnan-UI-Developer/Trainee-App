import { Component } from '@angular/core';

@Component({
  selector:'TrainerDasnboardTg',
  template:`

  <NavBar></NavBar>

  <div class="container-fluid"><span class="pull-right"><i class="glyphicon glyphicon-user"></i> Welcome, Hari</span></div>
  <div class="modal-dialog">
   <div class="modal-content">
       <div class="modal-header">
         <h1 class="text-center">Trainer Dashboard</h1>
       </div>
        <div class="modal-body">

            <button [routerLink]="['/Registration/reigster']" class="btn btn-block btn-lg btn-primary">REGISTRATION</button><br>
            <button class="btn btn-block btn-lg btn-info">ATTENTANCE</button><br>
            <button class="btn btn-block btn-lg btn-success">FEEDBACK</button><br>
            <button class="btn btn-block btn-lg btn-danger">ASSESMENT</button><br>
        </div>
   </div>
</div>
`,

styles:[`




  `]



})


export class TrainerDashboardClas{


}
