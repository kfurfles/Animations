import { Routes } from '@angular/router';

import { BottomBarComponent } from './../bottom-bar/bottom-bar.component';
import { Page404Component } from './../page404/page404.component';

export const metaRoutes = [
  { path: 'bottom-bar', component: BottomBarComponent, name: 'Bottom Bar' },
  { path: 'page-404', component: Page404Component, name: 'Page 404' },
]

export const appRoutes: Routes = metaRoutes.map(({ path, component }) => ({ path, component }));


