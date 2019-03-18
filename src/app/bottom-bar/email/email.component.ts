import { DefaultBehavior } from './../classes/DefaultBehavior';
import { Component, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmailComponent extends DefaultBehavior {

}
