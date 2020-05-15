import { Component, OnInit } from '@angular/core';
import {locations} from '../locations';
import {ActivatedRoute} from '@angular/router';
import {LoginService} from '../login-service';
import {RomanianLocation} from '../romanianLocation';
import {RegisterResponse} from '../responses';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-locations-by-category',
  templateUrl: './locations-by-category.component.html',
  styleUrls: ['./locations-by-category.component.css']
})
export class LocationsByCategoryComponent implements OnInit {
  locations;
  category;
  isAdmin = true;
  username;
  commentForm;
  constructor(private route: ActivatedRoute,
              private loginService: LoginService,
              private http: HttpClient,
              private formBuilder: FormBuilder) {
    this.commentForm = this.formBuilder.group({
        comment: ''
      }
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.category = params.get('categoryId');
      });
    this.loginService.isAdmin.subscribe(value => {
      this.isAdmin = value;
    });
    this.loginService.username.subscribe(value => {
      this.username = value;
    });
    this.http.get('http://localhost:8080/getLocations?filter=' + this.category)
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
