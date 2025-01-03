import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EventApisService } from '../Service/event-apis.service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-all-event',
  standalone: true,
  imports: [FormsModule,NgFor,NgClass,NgIf],
  templateUrl: './all-event.component.html',
  styleUrl: './all-event.component.css'
})
export class AllEventComponent {
  eventData:any[]=[]
constructor(private http:HttpClient,private eventSer:EventApisService){
  this.getAllEvents();
}
allEventLists:any[]=[];
orgId:any=localStorage.getItem("CustId");
CreateNewEvent:NewEvent={
  "eventId": 0,
  "eventName": "",
  "description": "",
  "location": "",
  "startDate": "",
  "startTime": "",
  "endDate": "",
  "endTime": "",
  "imageUrl": "",
  "capacity": "",
  "price": 0,
  "organizerId": this.orgId,
  "isIdentityMandatory": true,
  "isCoupleEntryMandatory": true
};

isFormVisible = false;
toggleForm() {
  this.isFormVisible = !this.isFormVisible;
  if (!this.isFormVisible) {
    // this.resetForm();
  }
}
getAllEvents(){
  this.eventSer.getAllEvent().subscribe((res:any)=>{
this.allEventLists=res.data;
  })
}
createEvents(){
  this.eventSer.createNewEvents(this.CreateNewEvent).subscribe((res:any)=>{
    if(res.result==true){
      alert("New Event Created Sucessfully.");
      this.getAllEvents();
    }else{
      alert(res.message);
    }
  })
};
onEdit(data:any){
  this.CreateNewEvent=data;
  if(this.isFormVisible==false){
    this.isFormVisible = !this.isFormVisible;
  }
};
updateEvent(){
this.eventSer.updateEvents(this.CreateNewEvent).subscribe((res:any)=>{
  if(res.result==true){
    alert("event Updated Sucessfully");
    this.getAllEvents();
  }else{
    alert(res.message);
  }
})
};
deleteEvent(id:any){
  const isDelete=confirm("Are You Sure To Delete Event? ");
  if(isDelete){
    this.eventSer.deleteEventById(id).subscribe((res:any)=>{
      if(res.result==true){
        alert("Event Deleted Sucessfully");
        this.getAllEvents();
      }else{
        alert(res.message);
      }
    })
  }

};

// resetForm() {
//   this.CreateNewEvent = {
//     eventId: 0,
//     eventName: '',
//     description: '',
//     location: '',
//     startDate: '',
//     startTime: '',
//     endDate: '',
//     endTime: '',
//     capacity: '',
//     price: 0,
//     imageUrl: '',
//     organizerId: 0,
//   };
// }



};



export class NewEvent {
eventId: 0;
  eventName: string;
  description: string;
  location: string;
  startDate: string;
  startTime: string
  endDate: string;
  endTime: string;
  imageUrl: string;
  capacity: string;
price: 0;
  organizerId: 0;
  isIdentityMandatory: true;
  isCoupleEntryMandatory: true;

  constructor(){
    this.eventId=0,
    this.eventName="",
    this.description="",
    this.location="",
    this.startDate="",
    this.endDate="",
    this.startTime="",
    this.endTime="",
    this.imageUrl="",
    this.capacity="",
    this.price=0,
    this.organizerId=0,
    this.isCoupleEntryMandatory=true,
    this.isIdentityMandatory=true
  }
}
