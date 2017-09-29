import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { ContactSearchService } from './contact-search.service';
import { Contact } from '../contact';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'rrd-contact-search',
  templateUrl: './contact-search.component.html',
  styleUrls: ['./contact-search.component.less'],
  providers: [ContactSearchService]
})
export class ContactSearchComponent implements OnInit {
  contacts: Observable<Contact[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private contactSearchService: ContactSearchService,
    private router: Router
  ) { }

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.contacts = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.contactSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Contact[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return Observable.of<Contact[]>([]);
      });
  }

  gotoDetail(contact: Contact): void {
    const link = ['/detail', contact.id];
    this.router.navigate(link);
  }

}
