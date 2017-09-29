import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'rrd-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  favorites: Contact[];

  constructor(
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contactService.getFavorites()
      .then(favorites => this.favorites = favorites);
  }

  goToDetail(contact: Contact): void {
    const link = ['/detail', contact.id];
    this.router.navigate(link);
  }

}
