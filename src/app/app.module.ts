import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StudentContactComponent } from './student-contact/student-contact.component';
import { StudentGeneralComponent } from './student-general/student-general.component';
import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { NgbDropdownModule, NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { CourseInsertComponent } from './course-insert/course-insert.component';
import {CourseModifyComponent} from "./course-modify/course-modify.component";


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StudentContactComponent,
    StudentGeneralComponent,
    StudentCoursesComponent,
    CourseInsertComponent,
    CourseModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
