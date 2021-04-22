import { Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';

export const PREDICTIVE_MAINTENANCE_ROUTES: Routes = [
  {
    path: 'appointments/:vehicleId',
    component: AppointmentsComponent,
  },
];
