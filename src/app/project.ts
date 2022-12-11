import {HttpClient} from "@angular/common/http";

export class Project {

  constructor(public project_id: string,
              public project_name: string,
              public group_name: string,
              public description: string,
              public call_number: string) {

  }
}
