import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { firstComponent } from 'src/firstcomponent';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    firstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,firstComponent]
})
export class AppModule { }
