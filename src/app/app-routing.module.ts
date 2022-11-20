import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from "./student/student.component";
import { StudentEnrollmentComponent } from "./student-enrollment/student-enrollment.component";
import { StudentInformationComponent } from "./student-information/student-information.component";

const routes: Routes = [
  { path: "students", component: StudentComponent },
  { path: "students/enrollment", component: StudentEnrollmentComponent },
  { path: "students/:uni", component: StudentInformationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StudentComponent, StudentEnrollmentComponent, StudentInformationComponent]
