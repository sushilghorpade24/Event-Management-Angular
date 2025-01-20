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
  };

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

}
