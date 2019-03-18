import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { BottomBarModule } from './bottom-bar/bottom-bar.module';
import { Page404Module } from './page404/page404.module';
import { environment } from '../environments/environment';

export const BottomRouteExported = () => BottomBarModule;
export const Page404RouteExported = () => Page404Module;

export const r = [
  {
    path: 'bottom',
    name: 'Bottom Bar',
    loadChildren: environment.production ? './bottom-bar/bottom-bar.module#BottomBarModule' : BottomRouteExported,
    data: { state: 'bottom' },
    show: true
  },
  {
    path: 'page404',
    name: 'Page 404',
    loadChildren: environment.production ? './page404/page404.module#Page404Module' : Page404RouteExported,
    data: { state: 'page404' },
    show: true,
  },
  { path: '**', redirectTo: 'bottom', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(r, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
