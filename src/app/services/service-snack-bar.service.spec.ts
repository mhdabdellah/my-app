import { TestBed } from '@angular/core/testing';

import { ServiceSnackBarService } from './service-snack-bar.service';

describe('ServiceSnackBarService', () => {
  let service: ServiceSnackBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSnackBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
