import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewPatient=()=>{
    return this.http.get("http://localhost:8080/view")

  }
  addPatient=(d:any)=>{
    return this.http.post("http://localhost:8080/add",d)

  }
  searchEmployee=(d:any)=>{
    return this.http.post("http://localhost:8080/search",d)

  
  }
  deleteEmployee=(d:any)=>{
    return this.http.post("http://localhost:8080/delete",d)

  }
}
