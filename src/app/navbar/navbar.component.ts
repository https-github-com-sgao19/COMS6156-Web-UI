import { Component, OnInit } from '@angular/core';
import {GoogleApiService} from "../google-api.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private readonly googleApiService: GoogleApiService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.googleApiService.logOut();
  }
}
