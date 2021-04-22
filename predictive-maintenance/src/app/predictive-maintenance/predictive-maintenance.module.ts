import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PREDICTIVE_MAINTENANCE_ROUTES } from './predictive-maintenance.routes';
import { AppointmentsComponent } from './appointments/appointments.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PREDICTIVE_MAINTENANCE_ROUTES)
  ],
  declarations: [
    AppointmentsComponent
  ]
})
export class PredictiveMaintenanceModule { }
