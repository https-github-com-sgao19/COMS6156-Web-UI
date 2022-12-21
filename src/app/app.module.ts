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
import { OAuthModule } from "angular-oauth2-oidc";

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StudentContactComponent,
    StudentGeneralComponent,
    StudentCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    OAuthModule.forRoot(),
    NgbNavModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
