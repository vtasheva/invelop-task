import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactDetailsActions } from './contact-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ContactDetailsService } from '../contact-details.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ContactDetail } from 'src/app/models/contact-detail.model';
import { Router } from '@angular/router';

@Injectable()
export class ContactDetailsEffects {


  constructor(private actions$: Actions, private contactDetailsService: ContactDetailsService, private router: Router) {}

  getContactDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactDetailsActions.getContactDetails),
      switchMap(() => {
        return this.contactDetailsService.getContactDetails()
          .pipe(
            map((response) => {
              return ContactDetailsActions.getContactDetailsSuccess({data: response});
            }),
            catchError((error: HttpErrorResponse) => {
              return of(ContactDetailsActions.getContactDetailsFailure(
                { errorMessage: error.message }
              ));
            })
          );
      })
    )
  })

  createContactDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactDetailsActions.createContactDetail),
      switchMap((contactDetail: ContactDetail) => {
        return this.contactDetailsService.createContactDetail(contactDetail)
          .pipe(
            map((data) => ContactDetailsActions.createContactDetailSuccess({id: data})),
            tap(() => this.router.navigateByUrl('/')),            
            catchError((error: HttpErrorResponse) => {
              return of(ContactDetailsActions.createContactDetailFailure(
                { errorMessage: error.message }
              ));
            })
          )
      }),
    )
  })

  deleteContactDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactDetailsActions.deleteContactDetail),
      switchMap((props) => {
        return this.contactDetailsService.deleteContactDetail(props.id)
          .pipe(
            map((data) => ContactDetailsActions.deleteContactDetailSuccess(props)),
            catchError((error: HttpErrorResponse) => {
              return of (ContactDetailsActions.deleteContactDetailFailure(
                { errorMessage: error.message }
              ))
            })
          )
      })
    )
  })

  updateContactDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactDetailsActions.updateContactDetail),
      switchMap((contactDetail: ContactDetail) => {
        return this.contactDetailsService.updateContactDetail(contactDetail)
          .pipe(
            map((data) => ContactDetailsActions.createContactDetailSuccess({id: data})),
            tap(() => this.router.navigateByUrl('/')),            
            catchError((error: HttpErrorResponse) => {
              return of(ContactDetailsActions.createContactDetailFailure(
                { errorMessage: error.message }
              ));
            })
          )
      }),
    )
  })

  getContactDetailsById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactDetailsActions.getContactDetailById),
      switchMap((props) => {
        return this.contactDetailsService.getContactDetailById(props.id)
          .pipe(
            map((response) => ContactDetailsActions.getContactDetailByIdSuccess({data: response})),
            catchError((error: HttpErrorResponse) => {
              return of(ContactDetailsActions.createContactDetailFailure(
                { errorMessage: error.message }
              ));
            })
          )
      }),
    )
  })

}
