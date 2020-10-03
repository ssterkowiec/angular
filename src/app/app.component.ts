import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // topMovies = [
  //   {title: 'skazani na shawshank', director: 'Frank'},
  //   {title: 'ojciec chrzestny', director: 'Frank'},
  //   {title: 'aaaaaa', director: 'Frank'},
  //   {title: 'bbbbb', director: 'Frank'},
  //   {title: 'cccccc', director: 'Frank'}
  // ];

  tab = 0;

  setTab(num: number): void {
    this.tab = num;
  }

  isSelected(num: number): boolean {
   return  this.tab === num;
  }
}
