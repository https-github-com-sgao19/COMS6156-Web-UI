import { Injectable } from '@angular/core';
import {Constant} from "./constant";
import {Course} from "./course";
import {HttpClient} from "@angular/common/http";
import {Project} from "./project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly url = this.getProjectServiceUrl();
  public projects: Project[];

  constructor(private http: HttpClient) {
    this.projects = [];

  }

  getProjectServiceUrl(): string {
    const theUrl = window.location.href;
    let result: string;

    // This is some seriously bad code.
    // If you do this on a job interview, you did not learn this in my class.
    if (theUrl.includes('amazonaws')) {
      /* This can change over time */
      result = "";
    }
    else {
      result = 'http://127.0.0.1:5011/project/';
    }
    return result;
  }
  getProjectBycall_number(call_number: string | null) {
    let url = this.getProjectServiceUrl();
    if (call_number) {
      url += call_number;
    } else {
    }
    return this.http.get<Project[]>(url);
  }



}

