import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import {RouterService} from './router.service';
import {FormsModule} from '@angular/forms';
import { QueryComponent } from './query/query.component';
import { QuerylistComponent } from './query/querylist/querylist.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    QueryComponent,
    QuerylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
