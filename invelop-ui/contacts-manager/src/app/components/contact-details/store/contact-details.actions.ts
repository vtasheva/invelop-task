import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ContactDetail } from 'src/app/models/contact-detail.model';

export const ContactDetailsActions = createActionGroup({
  source: 'ContactDetails',
  events: {
    'Get Contact Details': emptyProps(),
    'Get Contact Details Success': props<{ data: Array<ContactDetail> }>(),
    'Get Contact Details Failure': props<{ errorMessage: string }>(),
    'Create Contact Detail': props<ContactDetail>(),
    'Create Contact Detail Success': props<{ id: number }>(),
    'Create Contact Detail Failure': props<{ errorMessage: string }>(),
    'Delete Contact Detail': props<{ id: number }>(),
    'Delete Contact Detail Success': props<{ id: number }>(),
    'Delete Contact Detail Failure': props<{ errorMessage: string }>(),
    'Update Contact Detail': props<ContactDetail>(),
    'Update Contact Detail Success': props<{ id: number }>(),
    'Update Contact Detail Failure': props<{ errorMessage: string }>(),
    'Get Contact Detail By Id': props<{ id: number }>(),
    'Get Contact Detail By Id Success': props<{data: ContactDetail}>(),
    'Get Contact Detail By Id Failure': props<{ errorMessage: string }>()    
  }
});

