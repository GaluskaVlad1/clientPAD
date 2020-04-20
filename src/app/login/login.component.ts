import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {
    this.loginForm = this.formBuilder.group({
        username: '',
        password: '',
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(clientData){
    // tslint:disable-next-line:no-unused-expression
    this.router.navigate(['user/loggedin']), {relativeTo: this.router};
  }

}
