import { Component , OnInit , ViewChild } from '@angular/core';
import {apirequest} from './gitdet.service' ;
import {NgForm , NgModel} from '@angular/forms' ;
import {Router , ActivatedRoute} from '@angular/router' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    picked_repo : any[] = []
    
    constructor(private gitser : apirequest , private router : Router , private routes : ActivatedRoute){}
    
    ngOnInit(){
      
        this.gitser.pickedchg.subscribe( (val : any[]) => { this.picked_repo = val ;  } ) 
      
    }
    
    @ViewChild('user1') val : NgModel
    
    onuser(formdata : NgForm){
        console.log(this.val);
        this.gitser.remove_repo();
        let repo = formdata.value.reponame ;
        let name = formdata.value.username ;
      this.gitser.formvalues(name , repo) ;
        this.router.navigate(['repos'] , { relativeTo : this.routes }) ;
        
        
    }
    
    
  
  
}
