
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EventApisService } from '../Service/event-apis.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Note: Corrected 'styleUrl' to 'styleUrls'
})
export class LoginComponent {
  // Define LoginCust object
  LoginCust: Login = new Login();
  userType:any="";

  constructor(
    private router: Router,
    private http: HttpClient,
    private eventSer: EventApisService
  ) {}

  loginCust() {
    // Ensure LoginCust has valid data
    if (this.LoginCust && this.LoginCust.ContactNo && this.userType) {
      this.eventSer.loginUser(this.LoginCust).subscribe(
        (res: any) => {
          if (res.result === true) {
            debugger;
            localStorage.setItem('userType',this.userType)
            localStorage.setItem('CustId', res.data.userId);
           
            this.router.navigateByUrl('home'); // Redirect to home on success
          } else {
            alert('Wrong Credentials');
          }
        },
        (error) => {
          console.error('Login error:', error);
          alert('An error occurred during login. Please try again.');
        }
      );
    } else {
      alert('Please enter the credentials');
    }
  };

}

// Separate Login model
export class Login {
  Password: string;
  ContactNo: string;

  constructor() {
    this.Password = '';
    this.ContactNo = '';
  }
}
