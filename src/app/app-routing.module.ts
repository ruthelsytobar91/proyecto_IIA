import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { SesionComponent } from './sesion/sesion.component';
import { EventosComponent } from './eventos/eventos.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



const routes: Routes = [
  { path: 'sesion', component: SesionComponent },
  { path: 'usuario', component: UsuariosComponent },
  { path: 'eventos' ,component: EventosComponent},

  { path: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
