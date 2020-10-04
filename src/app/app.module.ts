import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyDirectiveDirective } from './my-directive.directive';
import { MyPipePipe } from './my-pipe.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyDirectiveDirective,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
