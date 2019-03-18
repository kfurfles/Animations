import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BottomBarModule } from './bottom-bar/bottom-bar.module';
import { Page404Module } from './page404/page404.module';

export const appRoutes = [
  { path: '', name: 'Bottom Bar', loadChildren: () => BottomBarModule, data: { state: 'bottom' }, show: false },
  { path: 'bottom', name: 'Bottom Bar', loadChildren: () => BottomBarModule, data: { state: 'bottom'}, show: true },
  { path: 'page404', name: 'Page 404', loadChildren: () => Page404Module, data: { state: 'page404'}, show: true },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
