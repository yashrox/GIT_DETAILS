import { Viewmodel } from './gitdet.model' ;
import {Injectable , EventEmitter} from '@angular/core' ;
import {HttpClient} from '@angular/common/http' ;
//import {Subject} from 'rxjs/Subject' ;


@Injectable()
export class apirequest {
        
        selectedchg = new EventEmitter<any[]>() ;
        pickedchg = new EventEmitter<any[]>() ;
    
    constructor(private http  : HttpClient ){}
    
    User_repo : Viewmodel[] = [                ] ;
    Picked_repo : Viewmodel[] = [   ] ;
    
        
        formvalues( username : String , repo : String ){
                
                    if(repo){
                        let url = 'https://api.github.com/repos/'+username+'/'+repo ; 
                        return this.http.get<any>(url, {observe : 'body'})                
                            .subscribe( (values) => {
                                                    
        let userdata = new Viewmodel(values.full_name , values.name , values.description , values.fork , 
                                        values.created_at , values.size , values.language) ;        
                    
                            this.User_repo.push(userdata) ;            
                            this.user_repo() ;    
                            
                            } )         
                    }else{
                                    
                        let url = 'https://api.github.com/users/'+username+'/repos' ;            
                        return this.http.get<any>(url , {observe : 'body'})
                        .subscribe( (datas) => {
                            datas.forEach( (values) => {
                                        let userdata = new Viewmodel(values.full_name , values.name , values.description , values.fork , 
                                        values.created_at , values.size , values.language) ;        
                    
                            this.User_repo.push(userdata) ;
                            } )
                        
                            this.user_repo() ;
                        } )
                                                
                    }
            
        }
        
        user_repo(){
            return  this.selectedchg.emit(this.User_repo.slice()) ;
        }
        
        
        picked_repo(index : number){
            let repo = this.User_repo[index] ;
            this.Picked_repo.push(repo);
            this.selected_repo() ;
        }
        
        
        selected_repo()  {
            return  this.pickedchg.emit(this.Picked_repo.slice()) ;
        }
        
        remove_repo(){
            this.User_repo = []
            return this.selectedchg.emit(this.User_repo.slice());
        }
    
}