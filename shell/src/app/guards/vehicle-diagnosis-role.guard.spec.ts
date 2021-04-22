import { TestBed } from '@angular/core/testing';

import { VehicleDiagnosisRoleGuard } from './vehicle-diagnosis-role.guard';

describe('VehicleDiagnosisRoleGuard', () => {
  let guard: VehicleDiagnosisRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VehicleDiagnosisRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
