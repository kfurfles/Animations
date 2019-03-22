import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BottomBarComponent {
  selectedIcon = '';
  sourceDefts = {
    authorTwitter: 'enmiemc',
    siteName: 'Uplabs',
    siteUrl: 'https://www.uplabs.com/posts/tab-bar-micro-interaction'
  };
  constructor() { }

}
