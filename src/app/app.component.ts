import { Component } from '@angular/core';
import { routerTransition } from './router.animations';

@Component({
  animations: [ routerTransition ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'animations';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
