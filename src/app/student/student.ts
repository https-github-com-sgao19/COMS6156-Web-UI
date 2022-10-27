export interface Student {
  uni: string;
  last_name: string;
  first_name: string;
  middle_name: string;
  email: string;
  school_code: string;
}

export interface StudentRsp {
  data: Student
}
