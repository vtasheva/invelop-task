import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ContactDetail } from 'src/app/models/contact-detail.model';

export const ContactDetailsActions = createActionGroup({
  source: 'ContactDetails',
  events: {
    'Get ContactDetails': emptyProps(),
    'Get ContactDetails Success': props<{ data: Array<ContactDetail> }>(),
    'Get ContactDetails Failure': props<{ errorMessage: string }>(),
  }
});

