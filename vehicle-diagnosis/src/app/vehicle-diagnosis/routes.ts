import { Routes } from '@angular/router';
import { ComponentDetailsComponent } from './dashboard/component-details/component-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const VEHICLE_DIAGNOSIS_ROUTES: Routes = [
  {
    path: 'dashboard/:vehicleId',
    component: DashboardComponent,
    children: [
      {
        path: 'component-details/:componentId',
        component: ComponentDetailsComponent
      }
    ]
  }
];