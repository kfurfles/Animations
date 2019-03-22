import {
  Component,
  OnInit
} from '@angular/core';

import $ from 'node_modules/jquery/dist/jquery.min.js'

@Component({
  selector: 'app-marvel-loader',
  templateUrl: './marvel-loader.component.html',
  styleUrls: ['./marvel-loader.component.scss']
})
export class MarvelLoaderComponent implements OnInit{
  indice; leave; i; stopLooping; interval;

  ngOnInit(): void {

    setTimeout(() => {
      this.init();
    }, 500);
  }

  init(){
    this.indice = 0;
    this.leave = $('.character');
    this.i = 0;
    this.stopLooping = true;

    this.interval = setInterval(() => {
      if (this.leave.filter('.out').next().get(0)) {
        this.leave.filter('.out').removeClass('out').next().addClass('out')
        this.setEnterClass(this.leave)
      } else {
        this.leave.filter('.out').removeClass('out');
        $(this.leave.get(0)).addClass('out')
        this.setEnterClass(this.leave);
      }
    }, 1000);
  }

  setEnterClass(leave) {
    if (leave.filter('.enter').next().get(0)) {
      leave.filter('.enter').removeClass('enter').next().addClass('enter')
    } else {
      leave.filter('.enter').removeClass('enter');
      $(leave.get(0)).addClass('enter')
    }
  }
}



