import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelLoaderRoutingModule } from './marvel-loader-routing.module';
import { MarvelLoaderComponent } from './marvel-loader/marvel-loader.component';

@NgModule({
  declarations: [MarvelLoaderComponent],
  imports: [
    CommonModule,
    MarvelLoaderRoutingModule
  ]
})
export class MarvelLoaderModule { }
