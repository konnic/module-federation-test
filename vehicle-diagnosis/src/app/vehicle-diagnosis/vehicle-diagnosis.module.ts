import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VEHICLE_DIAGNOSIS_ROUTES } from './routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentDetailsComponent } from './dashboard/component-details/component-details.component';
import { DiagnosisComponent } from './dashboard/component-details/diagnosis/diagnosis.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VEHICLE_DIAGNOSIS_ROUTES)
  ],
  declarations: [
    DashboardComponent,
    ComponentDetailsComponent,
    DiagnosisComponent
  ]
})
export class VehicleDiagnosisModule { }
