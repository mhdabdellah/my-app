import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryAlertComponent } from './primary-alert.component';

describe('PrimaryAlertComponent', () => {
  let component: PrimaryAlertComponent;
  let fixture: ComponentFixture<PrimaryAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
