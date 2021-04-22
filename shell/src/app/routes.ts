import { Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';

import { AuthGuard } from './guards/auth.guard';
import { PredictiveMaintenanceRoleGuard } from './guards/predictive-maintenance-role.guard';
import { VehicleDiagnosisRoleGuard } from './guards/vehicle-diagnosis-role.guard';

export const PCM_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ConfigComponent
  },
/*   {
    path: '',
    pathMatch: 'full',
    redirectTo: 'vehicle-diagnosis'
  }, */
  {
    path: 'vehicle-diagnosis',
    canActivate: [AuthGuard],
    canActivateChild: [VehicleDiagnosisRoleGuard],
    loadChildren: () => import('vdmfe/Module').then(m => m.VehicleDiagnosisModule),
  },
  {
    path: 'predictive-maintenance',
    canActivate: [AuthGuard, PredictiveMaintenanceRoleGuard],
    loadChildren: () => import('pmmfe/Module').then(m => m.PredictiveMaintenanceModule)
  }
];
