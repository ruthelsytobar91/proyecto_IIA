import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public images: any = [
    "/assets/imagesIIA/carrucel1.jpg"//0
    ,"/assets/imagesIIA/carrucel2.jpg"//1
  ]
}
