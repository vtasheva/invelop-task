import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ContactDetailsActions } from './contact-details.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { ContactDetailsService } from '../contact-details.service';
import { HttpErrorResponse } from '@angular/common/http';



@Injectable()
export class ContactDetailsEffects {


  constructor(private actions$: Actions, private contactDetailsService: ContactDetailsService) {}

  getContactDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactDetailsActions.getContactDetails),
      switchMap(() => {
        return this.contactDetailsService.getContactDetails()
          .pipe(
            map((response) => {
              console.log(response);
              return ContactDetailsActions.getContactDetailsSuccess({data: response});
            }),
            catchError((error: HttpErrorResponse) => {
              console.log(error);
              const errorMessage = error.message;
              return of(ContactDetailsActions.getContactDetailsFailure(
                { errorMessage: errorMessage }
              ));
            })
          );
      })
    )
  })
}
