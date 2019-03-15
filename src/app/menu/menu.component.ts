import { metaRoutes } from './../routes/app-routes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  routes = metaRoutes;

  ngOnInit() {
  }

}
