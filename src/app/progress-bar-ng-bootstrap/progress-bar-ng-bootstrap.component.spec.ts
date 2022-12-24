import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarNgBootstrapComponent } from './progress-bar-ng-bootstrap.component';

describe('ProgressBarNgBootstrapComponent', () => {
  let component: ProgressBarNgBootstrapComponent;
  let fixture: ComponentFixture<ProgressBarNgBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarNgBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarNgBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
