
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  imports: [
  	AgmCoreModule.forRoot({
	  apiKey: 'AIzaSyCzbL2RRp2a5LolCl5M0SnMQTVAtGK55Pg'
	})
  ],
  exports: [AgmCoreModule]
})

export class AppMapModule { }
