import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignatureComponent } from '@app/shared/signature/signature.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
      SignatureComponent
  ],
  exports: [
      SignatureComponent
  ]
})
export class SharedModule { }
