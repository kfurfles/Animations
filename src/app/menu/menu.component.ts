import { r as routes } from './../app-routing.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  routes: Array<any> = routes.filter(r => r.show);

  ngOnInit() {
  }

}
