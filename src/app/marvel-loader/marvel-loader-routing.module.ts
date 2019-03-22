import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarvelLoaderComponent } from './marvel-loader.component';

const routes: Routes = [
  { path: '', component: MarvelLoaderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelLoaderRoutingModule { }
