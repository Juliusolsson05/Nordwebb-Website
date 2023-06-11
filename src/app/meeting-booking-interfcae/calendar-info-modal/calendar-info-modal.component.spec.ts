import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarInfoModalComponent } from './calendar-info-modal.component';

describe('CalendarInfoModalComponent', () => {
  let component: CalendarInfoModalComponent;
  let fixture: ComponentFixture<CalendarInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarInfoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
