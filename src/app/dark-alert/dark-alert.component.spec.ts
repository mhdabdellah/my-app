import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkAlertComponent } from './dark-alert.component';

describe('DarkAlertComponent', () => {
  let component: DarkAlertComponent;
  let fixture: ComponentFixture<DarkAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
