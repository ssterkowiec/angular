import {Component, OnInit, ViewChild} from '@angular/core';
import {MoviesServiceService} from './movies-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserData} from './model/UserData';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  isLoading = true;

  constructor(private router: Router) {
    router.events.subscribe((value: RouterEvent) => this.checkEvent(value));
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      userId: new FormControl(),
      body: new FormControl()
    });


  }

  checkEvent(routerEvent: RouterEvent) {
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = true;
    } else if (routerEvent instanceof NavigationEnd
      || routerEvent instanceof NavigationCancel
      || routerEvent instanceof NavigationError) {
      this.isLoading = false;
    }
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

  // loadValues() {
  //   this.http.get('http://jsonplaceholder.typicode.com/posts/1')
  //     .subscribe(
  //       (data: { id: number, userId: number, title: string, body: string }) => {
  //         this.signupForm.controls.id.patchValue(data.id);
  //         this.signupForm.controls.userId.patchValue(data.userId);
  //         this.signupForm.controls.title.patchValue(data.title);
  //         this.signupForm.controls.body.patchValue(data.body);
  //       }
  //     );
  //
  // }


}

