import { Component, OnInit } from '@angular/core';
import {categories} from '../categories';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
categories = categories;
  constructor() { }

  ngOnInit(): void {
  }

}
