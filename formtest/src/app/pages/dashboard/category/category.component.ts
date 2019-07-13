import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
resdata;
maindata;
  constructor(private catser:CategoryService) { }
  catDel(id){
    this.catser.delCat(id).subscribe(res=>{
    this.resdata=res;
     if(this.resdata.err==0){
       console.log('Data deleted');
       this.catser.getCat().subscribe(res=>{
        this.resdata=res;
        if(this.resdata.err==0){
          this.maindata=this.resdata.cdata;
          console.log(this.maindata);
        }
     })
    }
    
    },err=>{
      console.log('api error');
    })

    
  }
  ngOnInit() {
    this.catser.getCat().subscribe(res=>{
     this.resdata=res;
     if(this.resdata.err==0){
       this.maindata=this.resdata.cdata;
       console.log(this.maindata);
     }
     if(this.resdata.err==1){
       alert('category data not find');
     }
    },err=>{
      console.log('api error occured');
    })
  }

}
