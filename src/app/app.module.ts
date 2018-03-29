import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParentModule } from './parent/parent.module';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';


@NgModule({
  declarations: [
    AppComponent,
      ParentComponent
  ],
  imports: [
    BrowserModule,
      ParentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
