import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';

import { AppRoutingModule }       from './app-routing.module';
import { AppComponent }           from './app.component';
import { CarouselComponent }      from './carousel.component';
import { AboutComponent }         from './about.component';
import { DashboardComponent }     from './dashboard.component';
import { PriceComponent }         from './price.component';
import { ContactComponent }       from './contact.component';
import { FooterComponent }        from './footer.component';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectService }         from './project.service';

@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule
                ],
  declarations: [ AppComponent,
                  CarouselComponent,
                  AboutComponent,
                  DashboardComponent,
                  PriceComponent,
                  ContactComponent,
                  FooterComponent,
                  ProjectDetailComponent],
  providers:    [ ProjectService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
