import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page404RoutingModule } from './page404-routing.module';
import { Page404Component } from './page404.component';
import { ElTextComponent } from './el-text/el-text.component';
import { MichaelComponent } from './michael/michael.component';
import { InformationsComponent } from './informations/informations.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [Page404Component, ElTextComponent, MichaelComponent, InformationsComponent],
  imports: [
    SharedModule,
    CommonModule,
    Page404RoutingModule
  ]
})
export class Page404Module { }
