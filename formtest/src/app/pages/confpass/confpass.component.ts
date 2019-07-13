import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import * as $ from 'jquery';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-confpass',
  templateUrl: './confpass.component.html',
  styleUrls: ['./confpass.component.css']
})
export class ConfpassComponent implements OnInit {
confform:FormGroup;
emailid;
uid;
  constructor(private fb:FormBuilder,private log:LoginService) { }
  confSubmit(){
    
    var uid=localStorage.getItem('userId');
    let oldpass=this.confform.controls.oldpassword.value;
    let newpass=this.confform.controls.newpassword.value;
    let confpass=this.confform.controls.confirmpassword.value;
    let passdata=({'op':oldpass,'np':newpass,'cp':confpass,'uid':uid});
   this.log.changePassword(passdata).subscribe(res=>{
     console.log(res)
   },err=>{
     console.log("api error occured");
   })
   
  }

  ngOnInit() {
    this.emailid=localStorage.getItem('userId');
    this.validate();
    this.passchange();
   
  }
  validate(){
    this.confform=this.fb.group({
      oldpassword:['',Validators.required],
      newpassword:['',Validators.required],
      confirmpassword:['',Validators.required]
    })
  }

  passchange(){
    $(document).ready(function(){
      $('#cpwd').keyup(function(){
        var pwd=$('#pwd').val();
        var cpwd=$('#cpwd').val();
        if(cpwd!==pwd){
         $('.error').html('**Password Does Not Matched');
         $('.error').css('color','red');
         return false;
        }
        else{
          $('.error').html('');
          return true ;
        }
      })
    })
  }

}
