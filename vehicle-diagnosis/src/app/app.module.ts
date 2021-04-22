import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { APP_ROUTES } from './routes';
import { AppComponent } from './app.component';
import { VehicleDiagnosisModule } from './vehicle-diagnosis/vehicle-diagnosis.module';

@NgModule({
  imports: [
    BrowserModule,
    VehicleDiagnosisModule, 
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
