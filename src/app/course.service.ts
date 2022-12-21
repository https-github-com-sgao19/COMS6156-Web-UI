import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Course } from "./course";
import { Constant } from "./constant";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly url = Constant.apiGatewayUrl + "/sections";

  constructor(private http: HttpClient) { }

  getCourseServiceUrl(): string {
    let result = this.url;
    return result;
  }

  getCourseBycall_number(call_number: string | null) {
    let url: string;
    if (call_number) {
      url = this.getCourseServiceUrl() + "/" + call_number;
    } else {
      url = this.getCourseServiceUrl();
    }
    return this.http.get<Course>(url);
  }

  getCourses(params: HttpParams=new HttpParams()) {
    let url = this.getCourseServiceUrl();
    return this.http.get<Course[]>(url, { params: params });
  }

  postCourses(course: Course) {
    let url = this.getCourseServiceUrl();
    return this.http.post<any>(url, course);
  }

  putCourses(course: Course, call_number: string) {
    let url = this.getCourseServiceUrl() + "/" + call_number;
    return this.http.put<any>(url, course);
  }

  deleteCourses(call_number: string | null) {
    let url = this.getCourseServiceUrl() + "/" + call_number;
    return this.http.delete(url);
  }
}
