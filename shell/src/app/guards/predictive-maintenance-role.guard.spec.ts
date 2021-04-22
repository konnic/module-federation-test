import { TestBed } from '@angular/core/testing';

import { PredictiveMaintenanceRoleGuard } from './predictive-maintenance-role.guard';

describe('VpredictiveMaintenanceRoleGuard', () => {
  let guard: PredictiveMaintenanceRoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PredictiveMaintenanceRoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
