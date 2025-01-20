import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { AllEventComponent } from './all-event/all-event.component';
import { authGuard } from './guard/auth.guard';
import { RegisterComponent } from './register/register.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { MybookingsComponent } from './mybookings/mybookings.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'layout/home', // Redirect to the home page by default
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'layout',
        component: LayoutComponent,
        // canActivate: [authGuard], // Guard for layout route
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },
            {
                path: 'allEvent',
                component: AllEventComponent,
                canActivate: [authGuard] // Optional: Guard for specific child routes
            },
            {
                path:'mybookings',
                component:MybookingsComponent,
                canActivate: [authGuard]
            }
           
        ]
    },
    {
        path:'createBooking/:Id',
        component:CreateBookingComponent,
        // canActivate: [authGuard]
    },
    {
        path: "app-event-details/:Id",
        component: EventDetailsComponent,
        // canActivate: [authGuard]
      },
    {   
        path: '**', // Fallback route for undefined paths
        redirectTo: 'layout/home'
    }
];
