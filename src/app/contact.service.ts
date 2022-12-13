import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Student } from "./student";
import { Contact } from "./contact";
import { Constant } from "./constant";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // private readonly url = Constant.studentMicroserviceUrl + "/students";
  private readonly url = "http://3.95.223.138:5011/contacts";
  public contact: Contact;

  constructor(private http: HttpClient) {
    this.contact = new Contact();
  }

  getContactServiceUrl(): string {
    const theUrl = window.location.href;
    let result: string;

    // This is some seriously bad code.
    // If you do this on a job interview, you did not learn this in my class.
    if (theUrl.includes('amazonaws')) {
      /* This can change over time */
      result = this.url;
    }
    else {
      result = this.url;
    }
    return result;
  }

  getContactByUni(uni: string | null) {
    let url = this.getContactServiceUrl();
    if (uni) {
      url = this.getContactServiceUrl() + "/" + uni;
    } else {
      url = this.getContactServiceUrl();
    }
    return this.http.get<Contact>(url);
  }

  // getStudents(params: HttpParams=new HttpParams()) {
  //   let url = this.getStudentServiceUrl();
  //   return this.http.get<Student[]>(url, { params: params });
  // }

  postContact(contact: Contact) {
    // let url = this.getStudentServiceUrl();
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
