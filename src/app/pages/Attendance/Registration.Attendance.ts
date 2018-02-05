import { Component } from '@angular/core';

@Component({
selector:'RegAtt',
template:`

<NavBar></NavBar>



<div class="container">
   <div class="panel panel-info">
      <div class="panel-heading">Attendance</div>
      <div class="panel-body">
         <form class="form-horizontal" id="contact_form">
            <div class="form-group">
               <label class="col-md-4 control-label">Student Name</label>
               <div class="col-md-4">
                     <input name="first_name" placeholder="Name" class="form-control"  type="text">
               </div>
            </div>
            <!-- Text input-->
            <div class="form-group">
               <label class="col-md-4 control-label" >NIRC</label>
               <div class="col-md-4">
                     <input name="last_name" placeholder="NRIC" class="form-control"  type="text">
               </div>
            </div>
            <div class="form-group">
               <label class="col-md-4 control-label" >Age</label>
               <div class="col-md-4">
                     <input name="last_name" placeholder="Age" class="form-control"  type="text">
               </div>
            </div>
            <!-- Text input-->
            <div class="form-group">
               <label class="col-md-4 control-label">Mobile</label>
               <div class="col-md-4">
                     <input  name="user_name" placeholder="Mobile Number" class="form-control"  type="text">
               </div>
            </div>
            <hr>
            <div class="col-md-12">
               <div class="form-group col-md-12 center-block ">
                  <div class="form-group">
                     <label class="col-md-4 control-label">Course Name</label>
                     <div class="col-md-4">: WSI JI</div>
                  </div>
               </div>
               <div class="form-group col-md-12 center-block ">
                  <div class="form-group">
                     <label class="col-md-4 control-label">Company</label>
                     <div class="col-md-4">: Cleaning Express</div>
                  </div>
               </div>
               <div class="form-group col-md-12 center-block ">
                  <div class="form-group">
                     <label class="col-md-4 control-label">Adult Eduator</label>
                     <div class="col-md-4">: Harikrishnan</div>
                  </div>
               </div>
               <div class="form-group">
                  <button class="btn btn-primary center-block">Done</button> <br>
               </div>
            </div>
         </form>
      </div>
   </div>
</div>


`,
styles:[`



`]
})


export class RegistrationAtten{





}
