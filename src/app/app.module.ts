import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LanddingComponent } from './landding/landding.component';
import { InformationComponent } from './information/information.component';
import { PlansComponent } from './plans/plans.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MeetingBookingInterfcaeComponent } from './meeting-booking-interfcae/meeting-booking-interfcae.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { CalenderComponentComponent } from './meeting-booking-interfcae/calender-component/calender-component.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PhoneModalComponent } from './phone-modal/phone-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarInfoModalComponent } from './meeting-booking-interfcae/calendar-info-modal/calendar-info-modal.component';
import { CalendarBookingModalComponent } from './meeting-booking-interfcae/calendar-booking-modal/calendar-booking-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LanddingComponent,
    InformationComponent,
    PlansComponent,
    ContactComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    MeetingBookingInterfcaeComponent,
    CalenderComponentComponent,
    HomeComponent,
    PhoneModalComponent,
    CalendarInfoModalComponent,
    CalendarBookingModalComponent,

  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
