import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

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
      result = "";
    }
    else {
      result = 'http://127.0.0.1:5011/students/';
    }
    return result;
  }

  getStudents(uni: string | null) {
    let url = this.getStudentServiceUrl();
    if (uni) {
      url = this.getStudentServiceUrl() + uni;
    } else {
      url = this.getStudentServiceUrl();
    }
    console.log(url);
    // let theUrl = this.getStudentServiceUrl() + uni;
    return this.http.get<[]>(url);
  }

  getStudentsByTemplate() {
    let url = this.getStudentServiceUrl();
  }

  postStudents(student: Student) {
    // let url = this.getStudentServiceUrl();
    let url = "http://127.0.0.1:5011/students"
    return this.http.post<any>(url, student);
  }

  putStudents(student: Student, uni: string) {
    let url = this.getStudentServiceUrl() + uni;
    return this.http.put(url, student);
  }

  deleteStudents(uni: string | null) {
    let url = this.getStudentServiceUrl() + uni;
    return this.http.delete(url);
  }
}
