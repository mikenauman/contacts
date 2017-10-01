import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../contact';

@Component({
  selector: 'rrd-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {
  @Input('contact') contact: Contact;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  editContact() {
    this.router.navigate(['/edit'], { queryParams: {id: this.contact.id} });
  }

}
