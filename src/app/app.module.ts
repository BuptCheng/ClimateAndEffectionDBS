import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QueryComponent } from './query/query.component';
import { QuerylistComponent } from './query/querylist/querylist.component';
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
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClimateComponent } from './climate/climate.component';
import { FlightComponent } from './flight/flight.component';
import { ClimatelistComponent } from './climate/climatelist/climatelist.component';
import { FlightlistComponent } from './flight/flightlist/flightlist.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {PostandgetService} from './shared/postandget.service';
import {SearchfilterService} from './shared/searchfilter.service';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {WeatherAndFlightComponent} from './weather-and-flight/weather-and-flight.component';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { WeatherAndFlightResultComponent } from './weather-and-flight-result/weather-and-flight-result.component';
import { CustomerReviewAnalysisComponent } from './customer-review-analysis/customer-review-analysis.component';
import {DataService} from './data.service';
import { HottestAndColdestAnalysisComponent } from './hottest-and-coldest-analysis/hottest-and-coldest-analysis.component';


const appRoutes: Routes = [
  { path: '', component: SigninComponent} ,
  { path: 'signup', component: SignupComponent} ,
  { path: 'climate', component: ClimateComponent} ,
  { path: 'climate/list', component: ClimatelistComponent } ,
  { path: 'flight', component: FlightComponent } ,
  { path: 'flight/list', component: FlightlistComponent } ,
  { path: 'query', component: QueryComponent } ,
  { path: 'WeatherAndFlight', component: WeatherAndFlightComponent } ,
  { path: 'delayanalysis', component: WeatherAndFlightComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'deleteaccount', component: DeleteUserComponent },
  { path: 'WeatherAndFlightResult/:airport/:month/:day/:year', component: WeatherAndFlightResultComponent },
  { path: 'CustomerReviewAnalysis', component: CustomerReviewAnalysisComponent },
  { path: 'hotandcold', component: HottestAndColdestAnalysisComponent },
];

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QueryComponent,
    QuerylistComponent,
    ClimateComponent,
    FlightComponent,
    ClimatelistComponent,
    FlightlistComponent,
    SigninComponent,
    SignupComponent,
    WeatherAndFlightComponent,
    DeleteUserComponent,
    ResetpasswordComponent,
    WeatherAndFlightResultComponent,
    CustomerReviewAnalysisComponent,
    HottestAndColdestAnalysisComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
    MatAutocompleteModule,
    MatNativeDateModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes) ,
    FusionChartsModule,
    HttpModule,
  ],
  providers: [PostandgetService,SearchfilterService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
