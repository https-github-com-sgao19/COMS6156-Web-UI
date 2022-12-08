import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { StudentEnrollmentComponent } from "./student-enrollment/student-enrollment.component";
import { StudentInformationComponent } from "./student-information/student-information.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CourseComponent } from "./course/course.component";
import {CourseInsertComponent} from "./course-insert/course-insert.component";
import {CourseModifyComponent} from "./course-modify/course-modify.component";

const routes: Routes = [
  { path: "", component: NavbarComponent, children: [
      { path: "students", component: StudentComponent },
      { path: "courses", component: CourseComponent }
    ] },
  { path: "students/enrollment", component: StudentEnrollmentComponent },
  { path: "students/:uni", component: StudentInformationComponent },
  { path: "courses/insert", component: CourseInsertComponent },
  { path: "courses/:call_no", component: CourseModifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [NavbarComponent, StudentComponent, StudentEnrollmentComponent, StudentInformationComponent, CourseComponent, CourseModifyComponent]
