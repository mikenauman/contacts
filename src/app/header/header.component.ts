import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rrd-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input('title') title: string;

  constructor() { }

  ngOnInit() {
  }

}
