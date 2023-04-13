import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { ChartpageComponent } from './pages/chart/chart.component';
import { NgApexchartsModule } from "ng-apexcharts";
import {RouterModule} from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TodayComponent } from './pages/today/today.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { MatListModule } from '@angular/material/list';
import  { BodyComponent } from './body/body.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ChartpageComponent,
    TodayComponent,
    FoodListComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    NgApexchartsModule,
    FontAwesomeModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
