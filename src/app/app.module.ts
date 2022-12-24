import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { PrimaryAlertComponent } from './primary-alert/primary-alert.component';
import { SecondaryAlertComponent } from './secondary-alert/secondary-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { DangerAlertComponent } from './danger-alert/danger-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { InfoAlertComponent } from './info-alert/info-alert.component';
import { LightAlertComponent } from './light-alert/light-alert.component';
import { DarkAlertComponent } from './dark-alert/dark-alert.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ServiceProgressBarService } from './services/service-progress-bar.service';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MaterialModule } from './material/material.module';
import { ProgressBarNgBootstrapComponent } from './progress-bar-ng-bootstrap/progress-bar-ng-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SnackBarComponent,
    ProgressBarComponent,
    PrimaryAlertComponent,
    SecondaryAlertComponent,
    SuccessAlertComponent,
    DangerAlertComponent,
    WarningAlertComponent,
    InfoAlertComponent,
    LightAlertComponent,
    DarkAlertComponent,
    AlertsComponent,
    DatePickerComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProgressBarNgBootstrapComponent,
  ],
  providers: [ServiceProgressBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
