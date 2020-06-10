import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../usuario';
import { UsuarioServicoService } from '../usuario-servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criarusuarios',
  templateUrl: './criarusuarios.component.html',
  styleUrls: ['./criarusuarios.component.css']
})
export class CriarusuariosComponent implements OnInit {

  usuario:Usuario = new Usuario();
  submetido:boolean = false;

  constructor(private usuarioService:UsuarioServicoService,
              private router:Router) { }

  ngOnInit(): void {

  }


  novo():void{
    this.submetido=false;
    this.usuario = new Usuario();
  }
  
  salvar(){
    this.usuarioService.criaUsuario(this.usuario)
      .subscribe(dado =>console.log(dado), erro =>console.log(erro));
  
      this.usuario = new Usuario();
      this.navegarParaListagem();
   }

  onSubmit(usuarioForm:NgForm){
    this.submetido=true;
    this.salvar();
  }


   navegarParaListagem(){
      this.router.navigate(['/usuarios']);
   }
}
