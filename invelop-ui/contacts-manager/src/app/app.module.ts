import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { ContactDetailsEffects } from './components/contact-details/store/contact-details.effects';

import { TableModule } from 'primeng/table';
import {  StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import * as fromContactDetails from './components/contact-details/store/contact-details.reducer';
import { ContactDetailsListComponent } from './components/contact-details/contact-details-list/contact-details-list.component';
import { ButtonModule } from 'primeng/button';
import { AddContactDetailComponent } from './components/contact-details/add-contact-detail/add-contact-detail.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateContactDetailComponent } from './components/contact-details/update-contact-detail/update-contact-detail.component';
import {  RouterModule, RouterState  } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsListComponent,
    AddContactDetailComponent,
    UpdateContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot([]),
    EffectsModule.forRoot([
      ContactDetailsEffects
    ]),
    StoreModule.forRoot({
      'contactDetails': fromContactDetails.contactDetailsReducer
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
