import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MeetingBookingInterfcaeComponent } from './meeting-booking-interfcae/meeting-booking-interfcae.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Booking', component: MeetingBookingInterfcaeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
