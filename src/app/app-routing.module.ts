import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BottomBarModule } from './bottom-bar/bottom-bar.module';
import { Page404Module } from './page404/page404.module';

export const BottomRoute = () => BottomBarModule;
export const Page404Route = () => Page404Module;

export const appRoutes = [
  { path: '', name: 'Bottom Bar', loadChildren: './bottom-bar/bottom-bar.module#BottomBarModule', data: { state: 'bottom' }, show: false },
  { path: 'bottom', name: 'Bottom Bar', loadChildren: './bottom-bar/bottom-bar.module#BottomBarModule', data: { state: 'bottom'}, show: true },
  { path: 'page404', name: 'Page 404', loadChildren: './page404/page404.module#Page404Module', data: { state: 'page404'}, show: true },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
