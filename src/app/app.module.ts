import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {apirequest} from './gitdet.service' ;
import {HttpClientModule} from '@angular/common/http';
import { RepoDetailsComponent } from './repo-details/repo-details.component';


@NgModule({
  declarations: [
    AppComponent,
    RepoDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule ,
  ],
  providers: [apirequest],
  bootstrap: [AppComponent]
})
export class AppModule { }
