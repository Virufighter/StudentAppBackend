import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  name=""
  dname=""

  constructor(private api:ApiService){}
  readValue=()=>{
    let data={"name":this.name,"dname":this.dname}
    this.api.addPatient(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Course added Successfully")
      }
      }
    )
  }

}
