import { createReducer, on } from '@ngrx/store';
import { ContactDetailsActions } from './contact-details.actions';
import { ContactDetail } from 'src/app/models/contact-detail.model';

export const contactDetailsFeatureKey = 'contactDetails';

export interface State {
  contactDetails: Array<ContactDetail>
}

export const initialState: State = {
  contactDetails: []
};

export const contactDetailsReducer = createReducer(
  initialState,
  on(ContactDetailsActions.getContactDetailsSuccess, 
    (state, action) => ({
      ...state,
      contactDetails: action.data
    })
  )
);

