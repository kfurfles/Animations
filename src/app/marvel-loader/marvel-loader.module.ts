import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelLoaderRoutingModule } from './marvel-loader-routing.module';
import { MarvelLoaderComponent } from './marvel-loader.component';
import { CaptainAmericaComponent } from './captain-america/captain-america.component';
import { SpiderManComponent } from './spider-man/spider-man.component';
import { IronManComponent } from './iron-man/iron-man.component';
import { WolverineComponent } from './wolverine/wolverine.component';

@NgModule({
  declarations: [MarvelLoaderComponent, CaptainAmericaComponent, SpiderManComponent, IronManComponent, WolverineComponent],
  imports: [
    CommonModule,
    MarvelLoaderRoutingModule
  ]
})
export class MarvelLoaderModule { }
