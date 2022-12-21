import { Injectable } from '@angular/core';
import {Constant} from "./constant";
import {HttpClient} from "@angular/common/http";
import {Course} from "./course";

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private readonly url = Constant.apiGatewayUrl + "/enrollments";

  constructor(private httpClient: HttpClient) { }

  getEnrollmentServiceUrl() {
    return this.url;
  }

  getEnrollmentByUni(uni: string | null) {
    let url = this.getEnrollmentServiceUrl() + "/student/" + uni;
    return this.httpClient.get<Course[]>(url);
  }
}
