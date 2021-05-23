import { TestBed } from '@angular/core/testing';

import { employeeservices } from './employeeservices';

describe('employeeservices', () => {
  let service: employeeservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(employeeservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
