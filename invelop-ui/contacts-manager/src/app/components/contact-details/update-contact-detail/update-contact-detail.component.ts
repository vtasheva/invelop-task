import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as selectors from '../store/contact-details.selectors'
import { ContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailsActions } from '../store/contact-details.actions';
import { ActivatedRoute,  } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-contact-detail',
  templateUrl: './update-contact-detail.component.html',
  styleUrls: ['./update-contact-detail.component.css']
})
export class UpdateContactDetailComponent implements OnInit {

  selectedContactDetailId: number = 0;
  contactDetailForm: FormGroup = new FormGroup({});

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<undefined> {
    this.selectedContactDetailId = Number(this.route.snapshot.paramMap.get('id'));
    this.store.dispatch(ContactDetailsActions.getContactDetailById({id: this.selectedContactDetailId}));

    this.store.select(selectors.currentContactDetail).subscribe(data => {
      this.contactDetailForm = new FormGroup({
        firstName: new FormControl(data.firstName, [
          Validators.required
        ]),
        surname: new FormControl(data.surname, [
          Validators.required
        ]),
        dateOfBirth: new FormControl(data.dateOfBirth, [
        ]),
        address: new FormControl(data.address, [
        ]),
        phoneNumber: new FormControl(data.phoneNumber, [
        ]),
        iban: new FormControl(data.iban, [
        ])
      });
    });
  }

  updateContactDetail() {
    let updatedContactDetail = this.contactDetailForm.value as ContactDetail;
    updatedContactDetail.id = this.selectedContactDetailId;
    console.log(updatedContactDetail.dateOfBirth);
    this.store.dispatch(ContactDetailsActions.updateContactDetail(updatedContactDetail));
  }
}
