import { Component, OnInit } from '@angular/core';
import {locations} from '../locations';
import {LoginService} from '../login-service';
import {LocationAddSuccess, RegisterResponse} from '../responses';
import {HttpClient} from '@angular/common/http';
import {RomanianLocation} from '../romanianLocation';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})

export class LocationsListComponent implements OnInit {
  locations;
  isAdmin ;
  commentForm;
  username;
  constructor(private loginService: LoginService,
              private http: HttpClient,
              private formBuilder: FormBuilder,
              private router: Router,
              private sanitizer: DomSanitizer) {
    this.commentForm = this.formBuilder.group({
        comment: ''
      }
    );
  }

  ngOnInit() {
    this.loginService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
    this.loginService.username.subscribe(value => {
      this.username = value;
    });
    this.http.get('http://localhost:8080/getLocations?filter=all')
      .subscribe(resp =>
        this.locations = resp);
  }
  delete(location: RomanianLocation){
    this.http.delete<RegisterResponse>('http://localhost:8080/delete?title=' + location.title).subscribe(resp => {
      if (resp.register){
        window.alert('Location deleted!');
        this.http.get('http://localhost:8080/getLocations?filter=all')
          .subscribe(resp1 =>
            this.locations = resp1);
      }else{
        window.alert('Error deleting location!');
      }
    });
  }
  onSubmit(data, location){
    this.http.post<RegisterResponse>('http://localhost:8080/addComment?title=' + location.title +
      '&comment=' + this.commentForm.get('comment').value + '&' +
      'username=' + this.username, null).subscribe(resp => {
        if (resp.register){
          window.alert('Comment added!');
          this.http.get('http://localhost:8080/getLocations?filter=all')
            .subscribe(resp1 =>
              this.locations = resp1);
        }else{
          window.alert('Failed to add comment!');
        }
    });
  }
}
