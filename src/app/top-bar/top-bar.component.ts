import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
  isAdmin = true;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  addLocation(){
    // tslint:disable-next-line:no-unused-expression
    this.router.navigate(['addLocation']), {relativeTo: this.router};
  }
  goToCategories(){
    // tslint:disable-next-line:no-unused-expression
    this.router.navigate(['goToCategories']), {relativeTo: this.router};
  }
}
