import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Contact } from "./contact";
import { Constant } from "./constant";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly url = Constant.apiGatewayUrl + "/contacts";

  constructor(private http: HttpClient) { }

  getContactServiceUrl(): string {
    return this.url;
  }

  getContactByUni(uni: string | null) {
    let url: string;
    if (uni) {
      url = this.getContactServiceUrl() + "/" + uni;
    } else {
      url = this.getContactServiceUrl();
    }
    return this.http.get<Contact>(url);
  }

  postContact(contact: Contact) {
    let url = this.getContactServiceUrl();
    return this.http.post<any>(url, contact);
  }

  putContact(contact: Contact, uni: string) {
    let url = this.getContactServiceUrl() + "/" + uni;
    return this.http.put<any>(url, contact);
  }

  deleteContact(uni: string | null) {
    let url = this.getContactServiceUrl() + "/" + uni;
    return this.http.delete(url);
  }
}
