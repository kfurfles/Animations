import { BottomBarModule } from './bottom-bar/bottom-bar.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Page404Component } from './page404/page404.component';


export const appRoutes = [
  { path: 'bottom-bar', name: 'Bottom Bar', loadChildren: () => BottomBarModule },
  { path: 'page-404', name: 'Page 404', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
