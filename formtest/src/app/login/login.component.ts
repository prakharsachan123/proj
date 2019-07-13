import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { from } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform:FormGroup;
resdata;
errMsg;


  constructor(private fb:FormBuilder,private log:LoginService,private route:Router,private auth:AuthserviceService) {

   }

  onSubmit(){
    const formdata=this.loginform.getRawValue();
   this.log.Admindata(formdata).subscribe(res=>{
   this.resdata=res;
   if(this.resdata.err==0){
     console.log('ready to go on dashboard');
     localStorage.setItem('userId',this.resdata.user);
     this.route.navigate(['/dashboard']);
     if(localStorage.getItem("userId")==undefined){
       console.log("not allow");
     }else{
       this.auth.getUserLoggedIn();
       this.route.navigate(['/dashboard']);
     }
   }
   if(this.resdata.err==1){
     localStorage.setItem('userId',this.resdata.user);
     alert('incorrect email or pasword!!')
   }
   this.loginform.reset();
   },err=>{
     console.log("error occured");
   })
   
   
  }

  ngOnInit() {
    this.onValidate();
   
  }
  onValidate(){
    this.loginform=this.fb.group({
      email:['',[Validators.required,Validators.pattern('^[^ ][a-z]+[0-9]+@[a-z]{5,6}\.[a-z]{2,3}$')]],
      password:['',Validators.required,]
    })
  }

}
