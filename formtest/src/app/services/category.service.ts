import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
url="http://localhost:3000/api/";
  constructor(private http:HttpClient) { }

  addCat(data){
  return this.http.post(this.url+"addCategory",data);
  }

  getCat(){
    return this.http.get(this.url+"getCategory");
  }

  delCat(id){
    return this.http.delete(this.url+"delCat/"+id);
  }

  fetchData(id){
    return this.http.get(this.url+"fetchData/"+id);
  }
}
