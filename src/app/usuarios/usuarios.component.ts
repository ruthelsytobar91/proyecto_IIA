import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
  public show: boolean = false;
  public edite: boolean = false;
  public delete: boolean = false;

  crudFunction(crud:String){
    switch (crud) {
      case "show":
        this.show = true;
        this.edite = false;
        this.delete = false;
        break;
      case "edite":
        this.edite = true;
        this.show = false;
        this.delete = false;
        break;
      case "delete":
        this.delete = true;
        this.show = false;
        this.edite =false;

        break;
      
    }
    
  }


}
