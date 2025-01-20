import { Component } from '@angular/core';
import { EventApisService } from '../Service/event-apis.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-mybookings',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './mybookings.component.html',
  styleUrl: './mybookings.component.css'
})
export class MybookingsComponent {
  userBookings:any[]=[];
constructor(private eventSer:EventApisService){
  this.getUserBookings();

};
custId:any=localStorage.getItem("CustId");

getUserBookings(){
  debugger;
this.eventSer.getBookingByCust(this.custId).subscribe((res:any)=>{
  if(res.result==true){
    this.userBookings=res.data;

  }else{
    alert(res.message);
  }
})
}
}
