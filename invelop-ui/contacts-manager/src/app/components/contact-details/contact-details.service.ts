import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http"
import { ContactDetail } from "src/app/models/contact-detail.model";
import { ApiUrls } from "src/app/shared/api-urls";


@Injectable({ providedIn: 'root'})
export class ContactDetailsService {

    constructor(private http: HttpClient) {}

    getContactDetails() {
        return this.http.get<Array<ContactDetail>>(ApiUrls.contactDetails);
    }

    getContactDetailById(id: number) {
      return this.http.get<ContactDetail>(ApiUrls.contactDetails + '/' + id);
    }

    createContactDetail(contactDetail: ContactDetail) {
      return this.http.post<number>(ApiUrls.contactDetails, contactDetail);
    }

    updateContactDetail(contactDetail: ContactDetail) {
      return this.http.put<number>(ApiUrls.contactDetails + '/' + contactDetail.id, contactDetail);
    }

    deleteContactDetail(id: number) {
      return this.http.delete<number>(ApiUrls.contactDetails, {params: {id: id}});
    }
}