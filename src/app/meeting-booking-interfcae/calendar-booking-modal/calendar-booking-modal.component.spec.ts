import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarBookingModalComponent } from './calendar-booking-modal.component';

describe('CalendarBookingModalComponent', () => {
  let component: CalendarBookingModalComponent;
  let fixture: ComponentFixture<CalendarBookingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarBookingModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarBookingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
