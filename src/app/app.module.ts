import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
