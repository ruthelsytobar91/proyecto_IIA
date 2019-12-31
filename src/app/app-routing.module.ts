import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SesionComponent } from './sesion/sesion.component';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';


const routes: Routes = [
  { path: 'sesion', component: SesionComponent },
  { path: 'usuario', component: UsuariosComponent },

  { path: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
