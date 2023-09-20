import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContactDetails from './contact-details.reducer'

const contactDetailsFeatureSelector = createFeatureSelector<fromContactDetails.State>(fromContactDetails.contactDetailsFeatureKey);

export const contactDetails = createSelector(
    contactDetailsFeatureSelector,
    (state: fromContactDetails.State) => state.contactDetails
)