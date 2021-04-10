import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { AppMapModule } from './app-maps.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    AppMapModule,
    BrowserAnimationsModule,
    CarouselModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





