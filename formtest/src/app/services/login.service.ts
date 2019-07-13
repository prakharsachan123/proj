import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
url="http://localhost:3000/api/";


  constructor(private http:HttpClient) { }
  
  Admindata(formdata){
  
    return this.http.post(this.url+'adminlogin',formdata);
  }
  changePassword(data){
    return this.http.post(this.url+"changePassword",data);
  }

 
}
