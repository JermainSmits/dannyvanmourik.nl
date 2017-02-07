import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { NgbModule }          from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }       from './app.component';
import { CarouselComponent }  from './carousel.component';
import { DashboardComponent } from './dashboard.component';
import { FooterComponent }    from './footer.component'

@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule ],
  declarations: [ AppComponent, CarouselComponent, DashboardComponent, FooterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
