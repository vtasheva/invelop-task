import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContactDetail } from 'src/app/models/contact-detail.model';
import { ContactDetailsActions } from '../store/contact-details.actions';
import * as selectors from '../store/contact-details.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-details-list',
  templateUrl: './contact-details-list.component.html',
  styleUrls: ['./contact-details-list.component.css']
})
export class ContactDetailsListComponent implements OnInit {

  contactDetails$: Observable<Array<ContactDetail>>;

  constructor(private store: Store, private router: Router) {
    this.contactDetails$ = this.store.select(selectors.contactDetails);
  }

  ngOnInit(): void {
    this.store.dispatch(ContactDetailsActions.getContactDetails());
  }

  addNewContactDetail(): void {
    this.router.navigateByUrl('/add-contact-detail');
  }

  deleteContactDetail(id: number): void {
    this.store.dispatch(ContactDetailsActions.deleteContactDetail({id: id}));
  }

  updateContactDetail(id: number): void {
    this.router.navigateByUrl('/update-contact-detail/' + id);
  }
}
