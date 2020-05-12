import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {User} from '../user';
import {LoginResponse, RegisterResponse} from '../responses';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../login-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;
  user: User;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    ) {
    this.registerForm = this.formBuilder.group({
        username: '',
        password: '',
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(data){
    this.user = new User(this.registerForm.get('username').value, this.registerForm.get('password').value);
    this.http.post<RegisterResponse>('http://localhost:8080/register' , this.user)
      .subscribe(resp => {
        if (resp.register){
          window.alert('Registered succssefully! Please login!');
          // tslint:disable-next-line:no-unused-expression
          this.router.navigate(['']), {relativeTo: this.router};
        }else{
          window.alert('Name already taken!');
        }
      });
  }
}
