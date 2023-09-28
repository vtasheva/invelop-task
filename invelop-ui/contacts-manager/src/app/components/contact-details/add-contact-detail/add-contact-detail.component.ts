import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailsActions } from '../store/contact-details.actions';
import { Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact-detail',
  templateUrl: './add-contact-detail.component.html',
  styleUrls: ['./add-contact-detail.component.css']
})
export class AddContactDetailComponent implements OnInit {

  contactDetailForm: FormGroup = new FormGroup({});
  contactDetail: ContactDetail = {} as ContactDetail;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.contactDetailForm = new FormGroup({
      firstName: new FormControl(this.contactDetail.firstName, [
        Validators.required
      ]),
      surname: new FormControl(this.contactDetail.surname, [
        Validators.required
      ]),
      dateOfBirth: new FormControl(this.contactDetail.dateOfBirth, [
      ]),
      address: new FormControl(this.contactDetail.address, [
      ]),
      phoneNumber: new FormControl(this.contactDetail.phoneNumber, [
        Validators.pattern("^[0-9]*$"),
      ]),
      iban: new FormControl(this.contactDetail.iban, [
      ])
    });
  }

  saveContactDetail() {
    this.contactDetail = this.contactDetailForm.value as ContactDetail;
    this.store.dispatch(ContactDetailsActions.createContactDetail(this.contactDetail));
  }
}
