import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login-service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
  isAdmin;
  constructor(
    private router: Router,
    public loginService: LoginService,
  ){
  }

  ngOnInit() {
    this.loginService.isAdmin.subscribe(value => {
      this.isAdmin = value;
      console.log(this.isAdmin);
    });
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
