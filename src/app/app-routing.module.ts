import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';
import { CriarusuariosComponent } from './criarusuarios/criarusuarios.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';

const rotas : Routes=[
  {path:'usuarios', component:ListarusuariosComponent},
  {path:'usuarios/add', component:CriarusuariosComponent},
  {path:'usuarios/:id', component:DetalheUsuarioComponent},
  {path:'usuarios/at/:id',component:AtualizaUsuarioComponent}]
  


@NgModule({
declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rotas),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
