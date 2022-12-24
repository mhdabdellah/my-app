import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryAlertComponent } from './secondary-alert.component';

describe('SecondaryAlertComponent', () => {
  let component: SecondaryAlertComponent;
  let fixture: ComponentFixture<SecondaryAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
