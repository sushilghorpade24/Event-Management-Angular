import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventApisService } from '../Service/event-apis.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import bootstrap from '../../main.server';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule,CommonModule],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {

  eventId: any = "";
  eventDetails: any = {};
  orgEvents: any = {}// Changed to object

  constructor(private activatedRoute: ActivatedRoute, private eventSer: EventApisService) {
    this.activatedRoute.params.subscribe(res => {
      this.eventId = res;


    });
    this.getEventDetails();

  };

  getEventDetails() {
    this.eventSer.fetchEventDetails(this.eventId.Id).subscribe((res: any) => {
      if (res.result === true) {
        this.eventDetails = res.data;
        this.viewOrganizersEvents();// Assign object
      } else {
        alert("Event Details Fetch Failed");
      }
    });
  };
  router = inject(Router);
  goBack() {
    this.router.navigateByUrl("home")
  };
  viewOrganizersEvents() {
    this.eventSer.getOrganiserEvents(this.eventDetails.organizerId).subscribe((res: any) => {
      if (res.result === true) {
        this.orgEvents = res.data; // Assign object
        debugger;
      } else {
        alert("Event Details Fetch Failed");
      }
    })
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
  isBookingPopupVisible: boolean = false;

  showBookingPopup() {

    this.isBookingPopupVisible = true;
  };

  hideBookingPopup() {
    this.isBookingPopupVisible = false;
  };



  addTicketData() {
    this.eventBook.EventId = this.eventDetails.eventId;
    this.eventBook.EventBookingMembers.push(this.ticketDetails);

  };
isFormValid:boolean=false;
  booksEvents() {
    if(this.isFormValid==true){
      this.addTicketData();
      this.eventSer.bookEvent(this.eventBook).subscribe((res: any) => {
        if (res.result == true) {
          alert("Event Booked Sucessfully");
          this.hideBookingPopup();
          this.resetForm();
        } else {
          alert(res.message);
          this.showBookingPopup();
        }
      })
    }
   
  };
  resetForm() {
    this.ticketDetails = {
      BookingMemberId: 0,
      BookingId: 0,
      name: "",
      age: 0,
      identityCard: "",
      cardNo: "",
      contactNo: ""
    };
    this.eventBook={
      BookingId: 0,
    UserId: 0,
    EventId: "",
    noOfTickets: 0,
    EventBookingMembers: []
    }
  };

  navigateBook(Id:any){
    this.router.navigateByUrl("createBooking/"+Id);
  }

}
