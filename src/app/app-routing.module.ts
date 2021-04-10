import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClaimDetailComponent } from './components/claim-detail/claim-detail.component';

const routes: Routes = [
	{ path: 'claimDetail', component: ClaimDetailComponent  },
	{ path: '**', pathMatch: 'full', redirectTo: 'claimDetail' }
];

@NgModule({
  imports: [RouterModule.forRoot( routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
