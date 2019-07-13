import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
categoryForm:FormGroup;
myImage;
resdata;
errmsg;
  constructor(private fb:FormBuilder,private catser:CategoryService,private route:Router) { }

uploadFile(event){
if(event.target.files.length>0){
this.myImage=event.target.files[0];

}
}

  catAdd(){
    let formdata=new FormData();
    formdata.append('cname',this.categoryForm.controls.cname.value);
    formdata.append('description',this.categoryForm.controls.description.value);
    formdata.append('Image',this.myImage);
    this.catser.addCat(formdata).subscribe(res=>{
     this.resdata=res;
     if(this.resdata.err==0){
     this.route.navigate(['../dashboard/category']);
      console.log(res);
     }
     
    },err=>{
      console.log('api error occured');
    })
  }

  ngOnInit() {
  this.validate();
  }
  validate(){
    this.categoryForm=this.fb.group({
      cname:['',Validators.required],
      description:['',Validators.required]

    })
  }

}
