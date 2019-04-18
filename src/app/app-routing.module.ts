import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component' ;
import {RepoDetailsComponent} from './repo-details/repo-details.component' ;

const routes: Routes = [
  { path  : 'repos' , component :  RepoDetailsComponent } ,
      
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
