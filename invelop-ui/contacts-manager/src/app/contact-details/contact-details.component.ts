import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactDetailsActions } from './store/contact-details.actions';
import { ContactDetail } from '../models/contact-detail.model';
import { Observable } from 'rxjs';
import * as selectors from './store/contact-details.selectors';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  contactDetails$: Observable<Array<ContactDetail>>;

  cols: any[] = [
    { field: 'firstName', header: 'First Name' },
    { field: 'surname', header: 'Surname' },
    { field: 'dateOfBirth', header: 'Date of Birth' },
    { field: 'address', header: 'Address' },
    { field: 'phoneNumber', header: 'Phone Number' },
    { field: 'iban', header: 'IBAN' },
  ];

  constructor(private store: Store) {
    this.contactDetails$ = this.store.select(selectors.contactDetails);
  }

  ngOnInit(): void {
    this.store.dispatch(ContactDetailsActions.getContactDetails());
  }
}
