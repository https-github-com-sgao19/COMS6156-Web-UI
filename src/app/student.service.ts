import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Student } from "./student";
import { Constant } from "./constant";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly url = Constant.apiGatewayUrl + "/students";
  public students: Student[];

  constructor(private http: HttpClient) {
    this.students = []
  }

  getStudentServiceUrl(): string {
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

  getStudentByUni(uni: string | null) {
    let url = this.getStudentServiceUrl();
    if (uni) {
      url = this.getStudentServiceUrl() + "/" + uni;
    } else {
      url = this.getStudentServiceUrl();
    }
    return this.http.get<Student>(url);
  }

  getStudents(params: HttpParams=new HttpParams()) {
    let url = this.getStudentServiceUrl();
    return this.http.get<Student[]>(url, { params: params });
  }

  postStudents(student: Student) {
    let url = this.getStudentServiceUrl();
    return this.http.post<any>(url, student);
  }

  putStudents(student: Student, uni: string) {
    let url = this.getStudentServiceUrl() + "/" + uni;
    return this.http.put<any>(url, student);
  }

  deleteStudents(uni: string | null) {
    let url = this.getStudentServiceUrl() + "/" + uni;
    return this.http.delete(url);
  }
}
