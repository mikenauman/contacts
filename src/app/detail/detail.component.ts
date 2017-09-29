import { Component, OnInit, Input } from '@angular/core';

import { Contact } from '../contact';

@Component({
  selector: 'rrd-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  @Input('contact') contact: Contact;
  constructor() { }

  ngOnInit() {
  }

}
