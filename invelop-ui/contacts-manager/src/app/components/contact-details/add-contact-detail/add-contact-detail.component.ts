import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailsActions } from '../store/contact-details.actions';
import { Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-add-contact-detail',
  templateUrl: './add-contact-detail.component.html',
  styleUrls: ['./add-contact-detail.component.css']
})
export class AddContactDetailComponent {

  contactDetail: ContactDetail = {
    id: 0,
    firstName: '',
    surname: '',
    address: '',
    dateOfBirth: new Date(),
    phoneNumber: '',
    iban: ''
  };

  constructor(private store: Store) {
  }

  saveContactDetail() {
    this.store.dispatch(ContactDetailsActions.createContactDetail(this.contactDetail));
  }
}
