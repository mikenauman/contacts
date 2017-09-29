import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'rrd-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;
  error: any;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getContacts()
      .then(contacts => this.contacts = contacts)
      .catch(error => this.error = error);
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

}
