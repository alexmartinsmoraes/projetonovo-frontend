import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../usuario';
import { UsuarioServicoService } from '../usuario-servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listarusuarios',
  templateUrl: './listarusuarios.component.html',
  styleUrls: ['./listarusuarios.component.css']
})
export class ListarusuariosComponent implements OnInit {
  usuarios: Observable<Usuario[]>; 

  constructor(private usuarioServico:UsuarioServicoService,
              private routes: Router) { }

  ngOnInit(): void {
    //console.log("passei aqui");
    this.listarTodos();
  }
  
  listarTodos(){
    this.usuarios=this.usuarioServico.getUsuarios();
    //console.log("finalizei ação");
  };

  deletarporid(id:number){
   return this.usuarioServico.deletausuario(id)
          .subscribe(dados =>{
             console.log(dados) ;
             this.listarTodos();
          },
          erro => console.log(erro)
          );
  }

  detalharporid(id:number){
    this.routes.navigate(['usuarios', id]);

     }

 atualizaporid(id: number){
   this.routes.navigate(['usuarios/at',id]);

 }

}


