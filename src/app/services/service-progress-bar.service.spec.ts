import { TestBed } from '@angular/core/testing';

import { ServiceProgressBarService } from './service-progress-bar.service';

describe('ServiceProgressBarService', () => {
  let service: ServiceProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
