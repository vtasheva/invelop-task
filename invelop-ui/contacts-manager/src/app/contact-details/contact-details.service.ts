import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { ContactDetail } from "../models/contact-detail.model";
import { apiUrls } from "../shared/api-urls";

@Injectable({ providedIn: 'root'})
export class ContactDetailsService {
    constructor(private http: HttpClient) {}

    getContactDetails() {
        return this.http.get<Array<ContactDetail>>(apiUrls.getContactDetails);
    }
}