import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsListComponent } from './components/contact-details/contact-details-list/contact-details-list.component';
import { AddContactDetailComponent } from './components/contact-details/add-contact-detail/add-contact-detail.component';
import { UpdateContactDetailComponent } from './components/contact-details/update-contact-detail/update-contact-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact-details', pathMatch: 'full'},
  { path: 'contact-details', component: ContactDetailsListComponent },
  { path: 'add-contact-detail', component: AddContactDetailComponent },
  { path: 'update-contact-detail/:id', component: UpdateContactDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
