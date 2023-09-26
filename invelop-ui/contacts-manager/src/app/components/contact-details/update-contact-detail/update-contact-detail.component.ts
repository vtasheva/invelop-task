import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as selectors from '../store/contact-details.selectors'
import { ContactDetail } from 'src/app/models/contact-detail.model';
import { Observable, Subscription, tap } from 'rxjs';
import { ContactDetailsActions } from '../store/contact-details.actions';
import { ActivatedRoute,  } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-contact-detail',
  templateUrl: './update-contact-detail.component.html',
  styleUrls: ['./update-contact-detail.component.css']
})
export class UpdateContactDetailComponent implements OnInit {

  contactDetail: ContactDetail | null = null;
  contactDetailForm: FormGroup | null = null;

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<undefined> {
    let selectedContactDetailId = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(ContactDetailsActions.getContactDetailById({id: selectedContactDetailId}));

    this.store.select(selectors.currentContactDetail).subscribe(data => {
      this.contactDetail = {...data}

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
        ]),
        iban: new FormControl(this.contactDetail.iban, [
        ])
      });
    });
  }

  updateContactDetail() {
    this.store.dispatch(ContactDetailsActions.updateContactDetail(this.contactDetail as ContactDetail));
  }
}
