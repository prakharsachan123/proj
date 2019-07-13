import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
 private isUserLoggedIn;
  constructor() {
    this.isUserLoggedIn=false;
   }
   getUserLoggedIn(){
     this.isUserLoggedIn=true;
   }
   setUserLoggedIn(){
     return this.isUserLoggedIn;
   }
}
