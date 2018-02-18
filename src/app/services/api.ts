import { Injectable } from '@angular/core';
//import {Http, Headers, RequestOptions } from '@angular/http'; //angular 4
import { HttpClient,HttpHeaders } from '@angular/common/http';  // angular 5
import 'rxjs/Rx';

@Injectable()
export class ApiService{

  //public base:string="http://www.myapi.com/v2/";
  public base:string="http://localhost:1028/";

  constructor(public http:HttpClient){

  }

  loginAdmin(data:any){
    console.log('loginDatafromApi',data);
    return this.post('admin/adminLogin',data);   // here Controller.js will add to admin
  }

  loginTrainee(data:any){
    console.log('loginDatafromApi',data);
    return this.post('trainee/traineeLogin',data);  // here Controller.js will add to trainee
  }

  loginTrainer(data:any){
    console.log('loginDatafromApi',data);
    return this.post('trainer/trainerLogin',data);  // here Controller.js will add to trainer
  }

  viewuserslist(data:any){
    console.log('API');
      return this.post('admin/viewUserslist',data);
  }

  register(data:any){
    console.log('RegisterDatafromApi',data);
    return this.post('demo/testregister',data);
  }


  Cregister(data:any){
    console.log('RegisterDatafromApi',data);
    return this.post('admin/courseregister',data);
  }

  courseList(data:any){
    console.log('RegisterDatafromApi',data);
      return this.post('admin/viewCourselist',data);
  }


  deleteuserRecord(data:any){
      return this.post('admin/deleteuserList',data);
  }

  viewusersNameLists(data:any){
    return this.post('admin/viewUserListName',data);
  }

  finduserrecord(data:any){
    return this.post('admin/userList_view',data);
  }

  updaterec(data:any){
    console.log('updatedata',data);
    return this.post('admin/updateusetrec',data);
  }

  post(url:string,params:any){
      // console.log('helloPost');
    //  console.log('apiurl',url);
    var data = JSON.stringify( params );
      //console.log('helloPost',data);
    /*   angular 4

    let headers = new Headers(
 { 'Content-Type':'application/json'}
 // { 'Content-Type': 'Access-Control-Allow-Headers' }
 // { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
 );
   let options = new RequestOptions({ headers: headers });

*/
// angular 5
//    let headers = new HttpHeaders();
//    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    let headers:any = new HttpHeaders(
    {'Content-Type':'application/json; charset=utf-8'}
    );
     return this.http.post(this.base + url , data , headers )
                   .toPromise()
                   .then()
                   .catch()
  }
  get(){

  }
}
