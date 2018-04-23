import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { QueryComponent } from './query/query.component';
import { QuerylistComponent } from './query/querylist/querylist.component';
import { HomepageComponent } from './homepage/homepage.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
  MatTabsModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatListModule,
  MatTooltipModule,
  MatRadioModule,
  MatSortModule,
  MatNativeDateModule,
} from '@angular/material';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClimateComponent } from './climate/climate.component';
import { FlightComponent } from './flight/flight.component';
import { ClimatelistComponent } from './climate/climatelist/climatelist.component';
import { FlightlistComponent } from './flight/flightlist/flightlist.component';
import { FlightdetailComponent } from './flight/flightdetail/flightdetail.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {PostandgetService} from './shared/postandget.service';
import {SearchfilterService} from './shared/searchfilter.service';

const appRoutes: Routes = [
  { path: 'climatestart', component: ClimateComponent} ,
  { path: 'climatestart/list', component: ClimatelistComponent } ,
  { path: 'flight', component: FlightComponent } ,
  { path: 'query', component: QueryComponent } ,
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QueryComponent,
    QuerylistComponent,
    HomepageComponent,
    ClimateComponent,
    FlightComponent,
    ClimatelistComponent,
    FlightlistComponent,
    FlightdetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatSidenavModule,
    MatTabsModule,
    MatCardModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatListModule,
    MatTooltipModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    MatSortModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes) ,
    HttpModule,
  ],
  providers: [PostandgetService,SearchfilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
