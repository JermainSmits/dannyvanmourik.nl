import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { NgbModule }          from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }       from './app.component';
import { CarouselComponent }  from './carousel.component';
import { DashboardComponent } from './dashboard.component';
import { PriceComponent }     from './price.component';
import { ContactComponent }   from './contact.component';
import { FooterComponent }    from './footer.component';

@NgModule({
  imports:      [ NgbModule.forRoot(), BrowserModule ],
  declarations: [ AppComponent, CarouselComponent, DashboardComponent, PriceComponent, ContactComponent, FooterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
