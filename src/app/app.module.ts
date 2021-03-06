import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PreferenceComponent } from './components/preference/preference.component';
import { TimeSliceTableComponent } from './components/time-slice-table/time-slice-table.component';
import { TimeSliceButtonComponent } from './components/time-slice-button/time-slice-button.component';
import { CalenderComponent } from './components/calender/calender.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalenderService } from './services/calender.service';
import { PreferencesService } from './services/preferences.service';
import { AppRoutingModule } from './app.routing';
import { CalenderHeaderComponent } from './components/calender-header/calender-header.component';
import { CalenderNavigationComponent } from './components/calender-navigation/calender-navigation.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { GraphDataService } from './services/graph-data.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    PreferenceComponent,
    TimeSliceTableComponent,
    TimeSliceButtonComponent,
    CalenderComponent,
    CalenderHeaderComponent,
    CalenderNavigationComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      'radius': 40,
      'space': -10,
      'outerStrokeWidth': 10,
      'outerStrokeColor': '#FFA500',
      'innerStrokeColor': '#ffc107',
      'innerStrokeWidth': 10,
      'animateTitle': false,
      'animationDuration': 1000,
      'showUnits': true,
      'showBackground': true,
      'clockwise': true
    }),
  ],
  providers: [PreferencesService, CalenderService, GraphDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
