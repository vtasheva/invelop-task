import { createReducer, on } from '@ngrx/store';
import { ContactDetailsActions } from './contact-details.actions';
import { ContactDetail } from 'src/app/models/contact-detail.model';

export const contactDetailsFeatureKey = 'contactDetails';

export interface State {
  contactDetails: Array<ContactDetail>,
  currentContactDetail: ContactDetail
}

export const initialState: State = {
  contactDetails: [],
  currentContactDetail: {} as ContactDetail,
};

export const contactDetailsReducer = createReducer(
  initialState,
  on(ContactDetailsActions.getContactDetailsSuccess, 
    (state, action) => ({
      ...state,
      contactDetails: action.data
    })
  ),
  on(ContactDetailsActions.deleteContactDetailSuccess,
    (state, action) => ({
      ...state,
      contactDetails: state.contactDetails.filter(x => x.id != action.id)
    })
  ),
  on(ContactDetailsActions.getContactDetailByIdSuccess,
    (state, action) => ({
      ...state,
      currentContactDetail: action.data as ContactDetail
    }))
);

