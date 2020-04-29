import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../LoginResponse';
import {Observable} from 'rxjs';
import {LoginService} from '../login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginResponse: Observable<LoginResponse>;
  loginForm;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private loginService: LoginService,
  ) {
    this.loginForm = this.formBuilder.group({
        username: '',
        password: '',
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(clientData) {
    // Not working yet
    this.http.get<LoginResponse>('http://localhost:8080/login?username=' +
      this.loginForm.get('username').value + '&password=' + this.loginForm.get('password').value)
      .subscribe(resp => {
        if (resp.loginSuccess){
        this.loginService.setAdmin(true);
        this.loginService.setLogged(resp.loginSuccess);
        // tslint:disable-next-line:no-unused-expression
        this.router.navigate(['/user/loggedin']), {relativeTo: this.router};
      }else{
        window.alert('Wrong username or password!');
      }
    });
  }
}
