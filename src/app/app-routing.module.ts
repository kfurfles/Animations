import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { BottomBarModule } from './bottom-bar/bottom-bar.module';
import { Page404Module } from './page404/page404.module';
import { environment } from '@env/environment.prod';

export const BottomRouteExported = () => BottomBarModule;
export const Page404RouteExported = () => Page404Module;

export const r = [
  {
    path: 'bottom',
    name: 'Bottom Bar',
    loadChildren: environment.production ? BottomRouteExported : './bottom-bar/bottom-bar.module#BottomBarModule',
    data: { state: 'bottom' },
    show: true
  },
  {
    path: 'page404',
    name: 'Page 404',
    loadChildren: environment.production ? Page404RouteExported : './page404/page404.module#Page404Module',
    data: { state: 'page404' },
    show: true,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(r, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
