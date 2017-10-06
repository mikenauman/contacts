import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HeaderModule } from 'rrd-library';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { ContactService } from './contact.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    DetailComponent,
    ListComponent,
    DetailPageComponent,
    ContactSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HeaderModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 150 })
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
