import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userId;
conf;
  constructor(private route:Router) { }

  ngOnInit() {
    this.userId=localStorage.getItem('userId');
  }
  signout(){
    this.conf=this.userId;
    this.conf=confirm('are you sure to SignOut!!')
    if(this.conf==true){
      localStorage.removeItem('userId');
      this.route.navigate(['/']);
    }
    else{
        alert('you stay on that page');
    }

  

    // localStorage.removeItem('userId');
    // this.route.navigate(['/']);
  }

}
