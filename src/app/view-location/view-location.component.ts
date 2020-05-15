import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {RegisterResponse} from '../responses';
import {LoginService} from '../login-service';
import {ActivatedRoute} from '@angular/router';
import {RomanianLocation} from '../romanianLocation';

@Component({
  selector: 'app-view-location',
  templateUrl: './view-location.component.html',
  styleUrls: ['./view-location.component.css']
})
export class ViewLocationComponent implements OnInit {

  location: RomanianLocation;
  username;
  commentForm;
  comments;
  locationTitle;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private loginService: LoginService,
              private http: HttpClient) {
    this.commentForm = this.formBuilder.group({
        comment: ''
      }
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.locationTitle = params.get('locationId');
      });
    this.loginService.username.subscribe(value => {
      this.username = value;
    });
    this.http.get<RomanianLocation>('http://localhost:8080/viewLocation?title=' + this.locationTitle)
      .subscribe(resp => {
        this.location = resp;
      });
    this.http.get('http://localhost:8080/getComments?title=' + this.locationTitle)
      .subscribe(resp =>
       this.comments = resp);
  }
  onSubmit(data, location){
    this.http.post<RegisterResponse>('http://localhost:8080/addComment?title=' + location.title +
      '&comment=' + this.commentForm.get('comment').value + '&' +
      'username=' + this.username, null).subscribe(resp => {
      if (resp.register){
        window.alert('Comment added!');
        this.http.get('http://localhost:8080/getComments?title=' + this.locationTitle)
          .subscribe(resp1 =>
            this.comments = resp1);
      }else{
        window.alert('Failed to add comment!');
      }
    });
  }

}
