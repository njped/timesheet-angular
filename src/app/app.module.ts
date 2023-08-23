import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentsComponent } from './components/departments/departments.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { TopNavComponent } from './components/TopNav/TopNav.component';
import { AnalyticsTableComponent } from './components/analytics-table/analytics-table.component';

@NgModule({
  declarations: [					
    AppComponent,
      DepartmentsComponent,
      TimesheetComponent,
      AnalyticsComponent,
      TopNavComponent,
      AnalyticsTableComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
