import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CilTabModule } from './cil-tab/cil-tab.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CilTabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
