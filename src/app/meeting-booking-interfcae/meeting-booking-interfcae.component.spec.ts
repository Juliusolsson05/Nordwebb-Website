import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingBookingInterfcaeComponent } from './meeting-booking-interfcae.component';

describe('MeetingBookingInterfcaeComponent', () => {
  let component: MeetingBookingInterfcaeComponent;
  let fixture: ComponentFixture<MeetingBookingInterfcaeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingBookingInterfcaeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingBookingInterfcaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
