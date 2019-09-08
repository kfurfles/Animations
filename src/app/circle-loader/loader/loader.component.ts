import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  options = {
    add: 'running',
    remove: '',
  };
  statusClass = 'running';
  constructor() { }

  ngOnInit() {
  }

  toggle(option: string){
    this.statusClass = this.options[option]
  }

}
