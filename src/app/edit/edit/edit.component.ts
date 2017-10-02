import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ViewChild } from '@angular/core';

import { ContactService } from '../../contact.service';
import { Contact } from '../../contact';

@Component({
  selector: 'rrd-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  contact: Contact = new Contact();
  title: String = 'Edit Contact';
  error: any;
  success: String;
  @ViewChild('f') form: any;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.queryParams.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.contactService.getContact(id)
            .then(contact => this.contact = contact);
      } else {
        this.contact = new Contact();
        this.title = 'New Contact';
      }
    });
  }

  save(): void {
    if (this.form.valid) {
      this.contactService
          .save(this.contact)
          .then(contact => {
            this.contact = contact; // saved contact, w/ id if new
            this.success = `Contact ${contact.name} saved.`;
          })
          .catch(error => this.error = error); // TODO: Display error message
    } else {
      this.form.controls['name'].setErrors({'required': true});
      this.form.controls['name'].markAsDirty();
    }
  }


}
