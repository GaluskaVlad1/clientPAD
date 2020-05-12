import { Component, OnInit } from '@angular/core';
import {locations} from '../locations';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../login-service';

@Component({
  selector: 'app-locations-by-category',
  templateUrl: './locations-by-category.component.html',
  styleUrls: ['./locations-by-category.component.css']
})
export class LocationsByCategoryComponent implements OnInit {
  locations = locations;
  categoryId;
  isAdmin = true;
  constructor(private route: ActivatedRoute,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.categoryId = params.get('categoryId');
      });
    this.loginService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
  }
  delete(locationId: number){
  }
}
