import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { ContactDetailsEffects } from './contact-details/store/contact-details.effects';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

import { TableModule } from 'primeng/table';
import {  StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import * as fromContactDetails from './contact-details/store/contact-details.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
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
