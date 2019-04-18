export class Viewmodel {
    
    constructor(public fullname  : String , public name : String ,public description  : String , public fork : boolean , public created : String , 
                public size : Number , public language : String ){
        
            this.name = name ;
            this.fullname = fullname ;
            this.description = description ;
            this.fork = fork ;
            this.created = created ;
            this.size = size ;
            this.language = language ;
    }
    
}