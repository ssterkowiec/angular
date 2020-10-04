import {Component, OnInit, ViewChild} from '@angular/core';
import {MoviesServiceService} from './movies-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserData} from './model/UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  http: HttpClient;
  @ViewChild('tdForm', {static: false})
  tdForm: any;
  bottomMovies: any;
  modelForm: any;
  object: UserData = new UserData();

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  ngOnInit(): void {
    this.modelForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      country: new FormControl()
    });
    this.updateOnServer();

  }

  onSubmit() {
    console.log(this.tdForm.value);
  }

  getFromServer() {
    this.http.get('http://jsonplaceholder.typicode.com/posts/1').subscribe(value => {
      this.object = value as UserData;
      console.log(value);
      // wyciaganie danych ze strony
    });
  }

  updateOnServer() {
    const httpHeader = {
      headers: new HttpHeaders({'Content-type': 'application/json ; charset=UTF-8'})
    };
    const body: UserData = {title: 'foo', body: 'bar', userId: 1, id: 1} as UserData;
    this.http.put('http://jsonplaceholder.typicode.com/posts/1', body, httpHeader )
      .subscribe(response => {
          this.object = response as UserData;
          console.log(response);
        }
      );
  }
}
