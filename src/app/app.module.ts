import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

// Components
import { AppComponent } from './app.component';
import { ClaimDetailComponent } from './components/claim-detail/claim-detail.component';
import { ClaimCarouselComponent } from './components/claim-carousel/claim-carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    ClaimDetailComponent,
    ClaimCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzbL2RRp2a5LolCl5M0SnMQTVAtGK55Pg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

