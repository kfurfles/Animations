import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BottomBarModule } from './bottom-bar/bottom-bar.module';
import { Page404Module } from './page404/page404.module';



export const appRoutes = [
  { path: 'bottom-bar', name: 'Bottom Bar', loadChildren: () => BottomBarModule },
  { path: 'page-404', name: 'Page 404', loadChildren: () => Page404Module },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
