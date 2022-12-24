import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightAlertComponent } from './light-alert.component';

describe('LightAlertComponent', () => {
  let component: LightAlertComponent;
  let fixture: ComponentFixture<LightAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LightAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
