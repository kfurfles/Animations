import { BottomBarComponent } from './bottom-bar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BottomBarRoutingModule } from './bottom-bar-routing.module';

@NgModule({
  declarations: [
    BottomBarComponent
  ],
  imports: [
    CommonModule,
    BottomBarRoutingModule
  ]
})
export class BottomBarModule { }
