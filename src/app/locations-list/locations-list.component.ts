import { Component, OnInit } from '@angular/core';
import {locations} from '../locations';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})

export class LocationsListComponent implements OnInit {
  locations = locations;
  isAdmin = true;
  constructor() { }

  ngOnInit() {
  }
  delete(locationId: number){
  }
}
