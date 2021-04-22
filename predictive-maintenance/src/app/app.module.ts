import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PredictiveMaintenanceModule } from './predictive-maintenance/predictive-maintenance.module';
import { APP_ROUTES } from './app.routes'

@NgModule({
  imports: [
    BrowserModule,
    PredictiveMaintenanceModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
