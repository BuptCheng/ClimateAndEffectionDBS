import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {RouterService} from './router.service';
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
} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ClimateComponent } from './climate/climate.component';
import { FlightComponent } from './flight/flight.component';
import { ClimatelistComponent } from './climate/climatelist/climatelist.component';
import { ClimatedetailComponent } from './climate/climatedetail/climatedetail.component';
import { FlightlistComponent } from './flight/flightlist/flightlist.component';
import { FlightdetailComponent } from './flight/flightdetail/flightdetail.component';


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
    ClimatedetailComponent,
    FlightlistComponent,
    FlightdetailComponent
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
    MatPaginatorModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
