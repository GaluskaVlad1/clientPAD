import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {RomanianLocation} from '../RomanianLocation';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {LocationAddSuccess, LoginResponse, RegisterResponse} from '../responses';
@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  locationForm;
  private loc: RomanianLocation;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient){
    this.locationForm = this.formBuilder.group({
        title: '',
        description: '',
        category: '',
      }
    );
  }
  ngOnInit() {
  }

  onSubmit(data){
    this.loc = new RomanianLocation(this.locationForm.get('title').value,
                            this.locationForm.get('description').value, this.locationForm.get('category').value, null);
    this.http.post<RegisterResponse>('http://localhost:8080/addLocation' , this.loc)
      .subscribe(resp => {
        if (resp.register) {
          window.alert('Location added succsesfully!');
          // tslint:disable-next-line:no-unused-expression
          this.router.navigate(['/user/loggedin']), {relativeTo: this.router};
        }else{
          window.alert('Failed to add location!');
        }
      });
  }

}
