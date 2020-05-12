import { Component, OnInit } from '@angular/core';
import {locations} from '../locations';
import {LoginService} from '../login-service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})

export class LocationsListComponent implements OnInit {
  locations = locations;
  isAdmin ;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
  }
  delete(locationId: number){
  }
}
