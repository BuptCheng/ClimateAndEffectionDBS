import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule,MatInputModule, MatAutocompleteModule, MatListModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatGridListModule, MatTabsModule, MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SearchComponent } from './search/search.component';
import {RouterService} from './router.service';
import { QueryComponent } from './query/query.component';
import { QuerylistComponent } from './query/querylist/querylist.component';
import { HomepageComponent } from './homepage/homepage.component';



const appRoutes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    SearchComponent,
    QueryComponent,
    QuerylistComponent,
    HomepageComponent,
 
  ],
  imports: [
    MatFormFieldModule,
    MatButtonModule,MatInputModule, MatAutocompleteModule, MatListModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule,MatGridListModule, MatTabsModule, MatExpansionModule,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
   // MatDialogModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
