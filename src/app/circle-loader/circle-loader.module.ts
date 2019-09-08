import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { CircleLoaderRoutingModule } from './circle-loader-routing.module';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CircleLoaderRoutingModule,
    CommonModule
  ]
})
export class CircleLoaderModule { }
