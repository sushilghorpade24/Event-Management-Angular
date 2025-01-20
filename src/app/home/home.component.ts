import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { EventApisService } from '../Service/event-apis.service';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ReusableComponent } from '../reusable/reusable.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,NgIf,CommonModule,ReusableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  evenList: any[] = [];

  constructor(private http: HttpClient, private eventApi: EventApisService,private router:Router) {
this.getAllEvents();

  }
  
  getAllEvents() {
    this.eventApi.getAllEvent().subscribe((res: any) => {
      debugger;
      this.evenList = res.data;
   
    })
  };
  eventDetailsPage(id:any){
  this.router.navigateByUrl("/app-event-details/"+id);

};
eventList1:any[] = [
  {
    eventName: "Event 1",
    location: "Marriage Event Management",
    imageUrl: "https://anyrentals.ae/uploads/blog/1707980965.jpg",
  },
  {
    eventName: "Event 2",
    location: "Conferance/Producr lounch",
    imageUrl: "https://www.motork.io/wp-content/uploads/2021/04/events-training.jpg",
  },
  {
    eventName: "Event 3",
    location: "Birthday Events",
    imageUrl: "https://e1.pxfuel.com/desktop-wallpaper/260/544/desktop-wallpaper-event-elephant-event-management.jpg",
  },
  {
    eventName: "Event 4",
    location: "Destination weddings",
    imageUrl:"https://png.pngtree.com/thumb_back/fw800/background/20240704/pngtree-nice-event-management-outdoor-image_15980786.jpg"
    // imageUrl: "/Images/image4.jpg",
  },
  {
    eventName: "Event 5",
    location: "Golobal/Virtual conference",
    imageUrl: "https://static7.depositphotos.com/1073943/729/i/450/depositphotos_7292670-stock-photo-conference.jpg",
  },
];
}
