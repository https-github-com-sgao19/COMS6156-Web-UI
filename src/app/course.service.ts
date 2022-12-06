import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Course} from "./course";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: Course[];

  constructor(private http: HttpClient) {
    this.courses = []
  }

  getCourseServiceUrl(): string {
    const theUrl = window.location.href;
    let result: string;

    // This is some seriously bad code.
    // If you do this on a job interview, you did not learn this in my class.
    if (theUrl.includes('amazonaws')) {
      /* This can change over time */
      result = "";
    }
    else {
      result = 'http://127.0.0.1:5011/sections/';
    }
    return result;
  }

  getCourseBycall_number(call_number: string | null) {
    let url = this.getCourseServiceUrl();
    if (call_number) {
      url = this.getCourseServiceUrl() + call_number;
    } else {
      url = this.getCourseServiceUrl();
    }
    // let theUrl = this.getStudentServiceUrl() + uni;
    return this.http.get<Course>(url);
  }

  getCourses(params: HttpParams=new HttpParams()) {
    let url = "http://127.0.0.1:5011/sections";
    return this.http.get<Course[]>(url, { params: params });
  }

  postCourses(course: Course) {
    // let url = this.getStudentServiceUrl();
    let url = "http://127.0.0.1:5011/sections"
    return this.http.post<any>(url, course);
  }

  putCourses(course: Course, call_number: string) {
    let url = this.getCourseServiceUrl() + call_number;
    return this.http.put<any>(url, course);
  }

  deleteCourses(call_number: string | null) {
    let url = this.getCourseServiceUrl() + call_number;
    return this.http.delete(url);
  }
}
