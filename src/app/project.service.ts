import { Injectable } from '@angular/core';
import { Constant } from "./constant";
import {HttpClient, HttpParams} from "@angular/common/http";
import { Project } from "./project";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private readonly url = Constant.apiGatewayUrl + "/projects";
  public projects: Project[];

  constructor(private http: HttpClient) {
    this.projects = [];
  }

  getProjectServiceUrl(): string {
    return this.url;
  }

  getProjectBycall_number(params: HttpParams=new HttpParams()) {
    let url = this.getProjectServiceUrl();
    return this.http.get<Project[]>(url, {params: params});
  }
}

