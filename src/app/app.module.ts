import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarusuariosComponent } from './listarusuarios/listarusuarios.component';
import { CriarusuariosComponent } from './criarusuarios/criarusuarios.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { FormsModule } from '@angular/forms';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarusuariosComponent,
    CriarusuariosComponent,
    DetalheUsuarioComponent,
    AtualizaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
