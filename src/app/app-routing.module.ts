import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeerListComponent } from './components/beer/beer-list/beer-list.component';
import { BeerDetailComponent } from './components/beer/beer-detail/beer-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BeerComponent } from './components/beer/beer.component';

const appRoutes: Routes = [
  {
    path: 'beer',
    component: BeerComponent,
    children: [
      { path: 'list', component: BeerListComponent },
      { path: 'detail', component: BeerDetailComponent },
    ],
  },
  { path: '', redirectTo: '/beer/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
