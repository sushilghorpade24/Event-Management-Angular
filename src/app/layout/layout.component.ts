import { Component } from '@angular/core';
import {  Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgIf],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(){
    this.isNavVisible();
  }
  // constructor(private  router:Router){

  // }
  // userSignUp(){
  //   this.router.navigateByUrl("app-register");
  // }
  loginUserType:any=localStorage.getItem('userType');

  isCreateEventVisinble:boolean=false;
 
  isNavVisible(){
    if(this.loginUserType=="Organizer"){
      this.isCreateEventVisinble=true;
    }else{
      this.isCreateEventVisinble=false;
    }

  };
}
