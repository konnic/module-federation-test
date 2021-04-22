import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PCM_ROUTES } from './routes';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(PCM_ROUTES)
  ],
  declarations: [
    AppComponent,
    ConfigComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
