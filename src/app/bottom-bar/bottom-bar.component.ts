import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BottomBarComponent {
  selectedIcon = '';
  constructor() { }

}
