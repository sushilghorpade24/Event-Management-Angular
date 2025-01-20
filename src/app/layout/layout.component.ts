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
  userLogin=localStorage.getItem("CustId");
  defaultId = '0'; 
  constructor(private router:Router){
    this.isNavVisible();
  }
  // constructor(private  router:Router){

  // }
  // userSignUp(){
  //   this.router.navigateByUrl("app-register");
  // }
  loginUserType:any=localStorage.getItem('userType');

  isCreateEventVisible:boolean=false;
 
  isNavVisible(){
    if(this.loginUserType=="Organizer"){
      this.isCreateEventVisible=true;
    }else{
      this.isCreateEventVisible=false;
    }

  };
  onLogOut(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  };
 
}
