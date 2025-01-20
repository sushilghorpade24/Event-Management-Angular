import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { BOOK_EVENT, CREATE_EVENT, CREATE_USER, DELETE_BOOKING, DELETE_EVENT, FETCH_EVENT_DETAILS, GET_ALL_BOOKING, GET_ALL_EVENTS, GET_BOOKING_BY_CUST, GET_ORGANISER_EVENTS, LOGIN_USER, UPDATE_EVENT } from '../constant/Constat';
import { Observable } from 'rxjs';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Injectable({
  providedIn: 'root'
})
export class EventApisService{
commonEventApi:string=environment.API_URL;
  constructor(private http:HttpClient) { 

  };
  getAllEvent(){
    return this.http.get(this.commonEventApi+GET_ALL_EVENTS);
  };
  addUser(obj:any){
    return this.http.post(this.commonEventApi+CREATE_USER,obj);
   };
   loginUser(obj:any){
    return this.http.post(this.commonEventApi+LOGIN_USER,obj);
   };

   createNewEvents(obj:any){
    return this.http.post(this.commonEventApi+CREATE_EVENT,obj);
   };

   updateEvents(obj:any){
    return this.http.post(this.commonEventApi+UPDATE_EVENT,obj);
   };

   deleteEventById(Id:any){
    return this.http.get(this.commonEventApi+DELETE_EVENT+Id);
   };

   fetchEventDetails(id:any){
    return this.http.get(this.commonEventApi+FETCH_EVENT_DETAILS+id);
   };

   getOrganiserEvents(id:any){
    return this.http.get(this.commonEventApi+GET_ORGANISER_EVENTS+id);
   };

   bookEvent(obj:any){
    return this.http.post(this.commonEventApi+BOOK_EVENT,obj);
   };

   getAllBooking(){
    return this.http.get(this.commonEventApi+GET_ALL_BOOKING);
   };

   deletesBookings(id:number){
   return this.http.get(this.commonEventApi+DELETE_BOOKING+id);
   };

   getBookingByCust(id:any){
    return this.http.get(this.commonEventApi+GET_BOOKING_BY_CUST+id);
   }

}
