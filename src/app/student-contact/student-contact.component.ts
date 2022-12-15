import { Component, OnInit } from '@angular/core';
import { Contact } from "../contact";
import { ActivatedRoute, Router } from "@angular/router";
import { ContactService } from "../contact.service";

@Component({
  selector: 'app-student-contact',
  templateUrl: './student-contact.component.html',
  styleUrls: ['./student-contact.component.css']
})
export class StudentContactComponent implements OnInit {

  public contact: Contact;
  public contactOld: Contact;
  public uni: string | null;
  public editMode: boolean;

  constructor(private activateRoute: ActivatedRoute, private router: Router, private contactService: ContactService) {
    this.contact = new Contact();
    this.contactOld = new Contact();
    this.uni = this.activateRoute.snapshot.paramMap.get('uni');
    this.contactService.getContactByUni(this.uni).subscribe({
      next: (data) => this.contact = data,
      error: (error) => this.router.navigate(["../"], {relativeTo: this.activateRoute})
    });
    this.editMode = false;
  }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.editMode = true;
    Object.assign(this.contactOld, this.contact);
  }

  onSave(): void {
    this.editMode = false;
    this.contactService.putContact(this.contact, this.contact.uni).subscribe({
      next: data => console.log("Success!", data),
      error: error => console.log("Error!", error)
    });
    Object.assign(this.contactOld, this.contact);
  }

  onCancel(): void {
    this.editMode = false;
    Object.assign(this.contact, this.contactOld);
  }

  onDelete(): void {
    this.contactService.deleteContact(this.uni).subscribe({
      next: data => console.log("Success!", data),
      error: error => console.log("Error!", error)
    });
    this.router.navigate(["../"], {relativeTo: this.activateRoute});
  }

}
