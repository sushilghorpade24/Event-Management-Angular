import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EventApisService } from '../Service/event-apis.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink,NgClass],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
newUser:any={
  "UserId": 0,
  "Name": "",
 "Email": "",
  "Password": "",
  "ContactNo": "",
  "Role": ""
}
  constructor(private http:HttpClient,private eventService:EventApisService){

  }
  createNewUser(){
    this.eventService.addUser(this.newUser).subscribe((res:any)=>{
      if(res.result==true){
        alert("New User Created Sucessfully");
      }else{
        alert(res.message);
      }
    })
  };
}
