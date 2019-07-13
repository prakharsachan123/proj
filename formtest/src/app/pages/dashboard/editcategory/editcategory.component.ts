import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
categoryForm:FormGroup;
id;
resdata;
  constructor(private fb:FormBuilder,private catser:CategoryService,private ar:ActivatedRoute) { }
  catEdit(){
this.ar.params.subscribe(par=>{
this.id=par.cid;
this.catser.fetchData(this.id).subscribe(res=>{
  this.resdata=res;
  if(this.resdata.err==0){
  this.categoryForm.patchValue(this.resdata.cdata);
  }
},err=>{
  console.log('api error occured');
})
})
  }

  ngOnInit() {
    this.validate();
    this.catEdit();
  }
  validate(){
    this.categoryForm=this.fb.group({
      cname:['',Validators.required],
      description:['',Validators.required]

    })
  }

}
