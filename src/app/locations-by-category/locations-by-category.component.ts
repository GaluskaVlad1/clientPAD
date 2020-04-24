import { Component, OnInit } from '@angular/core';
import {locations} from '../locations';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-locations-by-category',
  templateUrl: './locations-by-category.component.html',
  styleUrls: ['./locations-by-category.component.css']
})
export class LocationsByCategoryComponent implements OnInit {
  locations = locations;
  categoryId;
  isAdmin = true;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.categoryId = params.get('categoryId');
      });
  }
  delete(locationId: number){
  }
}
