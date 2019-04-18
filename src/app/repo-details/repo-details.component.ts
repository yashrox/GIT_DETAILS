import { Component, OnInit } from '@angular/core';
import {apirequest} from '../gitdet.service' ;

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {
  
  allrepos : any[] 
  edit : boolean = false ;
  
  constructor(private gitser : apirequest ) { }

  ngOnInit() {
            this.gitser.selectedchg.subscribe( (data) => { 
              
              if(data){
                this.edit = true ;
              }
                
              this.allrepos = data ;  }  )
    
  }

  onselect(index : number){
        this.gitser.picked_repo(index) ;
    }
  
  
}
