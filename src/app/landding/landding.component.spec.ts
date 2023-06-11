import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanddingComponent } from './landding.component';

describe('LanddingComponent', () => {
  let component: LanddingComponent;
  let fixture: ComponentFixture<LanddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
