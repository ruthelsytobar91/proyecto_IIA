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

  showFunction(){
    this.show = true;
  }

}
