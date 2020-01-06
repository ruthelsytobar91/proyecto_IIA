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
  public image:any = [
    "/assets/imagenes/alejandro.jpg" // 0
    ,"/assets/imagenes/carlangas.jpg" // 1
  ]

  public show: boolean = false;
  public edite: boolean = false;
  public delete: boolean = false;
  public taskDelete: boolean = false;

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
  deleteUserFunction(){
    this.taskDelete = true;
    setTimeout(function(e){
      console.log(e)
      this.taskDelete = false;
    }.bind(this),1500)
  }


}
