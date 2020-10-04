import {Component, OnInit, ViewChild} from '@angular/core';
import {MoviesServiceService} from './movies-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  @ViewChild('tdForm', {static: false})
  tdForm: any;
  bottomMovies: any;
  modelForm: any;

  ngOnInit(): void {
    this.modelForm = new FormGroup({
      firstName : new FormControl(),
      lastName : new FormControl(),
      age : new FormControl(),
      country : new FormControl()
    });

  }

  onSubmit() {
    console.log(this.tdForm.value);
  }

}
