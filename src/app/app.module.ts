import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MyDirectiveDirective} from './my-directive.directive';
import {MyPipePipe} from './my-pipe.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {NewsComponent} from './news/news.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {APIResolver} from './resolver/APIResolver';

const appRotes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    resolve: {message: APIResolver}
  },

  {
    path: 'home',
    component: HomeComponent,
    data: {page: 'Home page'},
  },
  {
    path: 'news/newsId',
    component: NewsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    MyPipePipe,
    HomeComponent,
    LoginComponent,
    NewsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRotes) /*wywolujemy metode i przekazujemy tablice*/
  ],
  providers: [APIResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
