import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  name=""
  sdata:any=[]
  
  constructor(private api:ApiService){}
  readValue=()=>{
    let data={"name":this.name}
    console.log(data)
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("no result found")
        } else {
          this.sdata=response
        }
      }
    )
  }
  deleteButtonClick=(id:any)=>{
    let data= {"id":id}
    this.api.deleteEmployee(data).subscribe(
      (generated:any)=>{
        console.log(generated)
      }
    )


  }

}
