import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EventApisService } from '../Service/event-apis.service';
import { CommonModule, NgFor } from '@angular/common';
import { Observable } from 'rxjs/internal/Observable';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-booking',
  standalone: true,
  imports: [NgFor, CommonModule,FormsModule],
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.css'
})
export class CreateBookingComponent {
  bookingList: any[] = [];
  bookingId: any = {};
  loginUserType=localStorage.getItem("userType")
  
  constructor(private http: HttpClient, private eventSer: EventApisService, private activateroute: ActivatedRoute) {
    debugger;
    this.activateroute.params.subscribe(res => {

      this.bookingId = res;
    });
    this.getAllBookings();
    if(this.bookingId===123){
      this.closeModal();
    }else{
      this.openModal();
    }
  }

  getAllBookings() {
    this.eventSer.getAllBooking().subscribe((res: any) => {
      if (res.result == true) {
        this.bookingList = res.data;
        debugger;
      } else {
        alert(res.message);
      }
    })
  };
  deleteBooking(id: number) {
    const isDelete = confirm("Are sure About To delete Booking");
    if (isDelete) {
      this.eventSer.deletesBookings(id).subscribe((res: any) => {
        if (res.result == true) {
          alert("Booking Deleted Successfully");
          this.getAllBookings();
        } else {
          alert(res.message);
        }
      })
    }

  };

  eventBook: any = {
    BookingId: 0,
    UserId: localStorage.getItem("CustId"),
    EventId: "",
    noOfTickets: 0,
    EventBookingMembers: []
  };

  ticketDetails: any = {
    BookingMemberId: 0,
    BookingId: 0,
    name: "",
    age: 0,
    identityCard: "",
    cardNo: "",
    contactNo: ""
  };
  addTicketData() {
    this.eventBook.EventId =  this.bookingId.Id;
    this.eventBook.EventBookingMembers.push(this.ticketDetails);

  };
  isFormValid:boolean=false; //for checkbox
  isFormVisible: boolean = false;//is hide nd show
  booksEvents() {
    if(this.isFormValid==true){
      this.addTicketData();
      this.eventSer.bookEvent(this.eventBook).subscribe((res: any) => {
        if (res.result == true) {
          alert("Event Booked Sucessfully");
          
        } else {
          alert(res.message);
         
        }
      })
    }
   
  };
  onEdit(data:any){
    this.ticketDetails=data;
    this.isFormVisible=true;
    }
  hideBookingPopup() {
    // if (this.bookingId === '0') {
    //   this.isFormVisible = false;
    // } else {
    //   this.isFormVisible = true;
    // }
    this.isFormVisible=false;
  };


  //
  // updatePopupVisibility(): void {
  //   if (this.bookingId === '0') {
  //     this.isFormVisible = false; // Hide the form popup
  //   } else {
  //     this.isFormVisible = true; // Show the form popup
  //   }
  // }

  // hideBookingPopup(): void {
  //   this.isFormVisible = false;
  // }
  

  openModal(): void {
    // this.isFormVisible = true;
    this.isFormVisible = false;
  }
  
  closeModal(): void {
    // this.isFormVisible = false;
    this.isFormVisible = true;

  }
  
  
}
