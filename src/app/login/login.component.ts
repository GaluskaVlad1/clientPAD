import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';
import {Observable} from 'rxjs';
import {LoginService} from '../login-service';
import {LoginResponse} from '../responses';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;
  user: User;
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

  goToRegister(){
    // tslint:disable-next-line:no-unused-expression
    this.router.navigate(['register']), {relativeTo: this.router};
  }

  ngOnInit() {
  }

  onSubmit(clientData) {
    // Not working yet
    this.user = new User(this.loginForm.get('username').value, this.loginForm.get('password').value);
    this.http.post<LoginResponse>('http://localhost:8080/login' , this.user)
      .subscribe(resp => {
        if (resp.loginSuccess){
          this.loginService.setAdmin(resp.admin);
          this.loginService.setLogged(resp.loginSuccess);
          // tslint:disable-next-line:no-unused-expression
          this.router.navigate(['/user/loggedin']), {relativeTo: this.router};
      }else{
        window.alert('Wrong username or password!');
      }
    });
  }
}
