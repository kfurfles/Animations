import { DefaultBehavior } from './../classes/DefaultBehavior';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent extends DefaultBehavior {

  animate(): void {
    const { classList } = this.iconRef.nativeElement;
    classList.add('animate');
    setTimeout(() => {
      classList.remove('animate');
    }, 2000);
  }
}
