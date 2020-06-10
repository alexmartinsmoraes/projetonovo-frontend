import { Component, OnInit } from '@angular/core';
import { UsuarioServicoService } from '../usuario-servico.service';
import { Usuario } from '../usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualiza-usuario',
  templateUrl: './atualiza-usuario.component.html',
  styleUrls: ['./atualiza-usuario.component.css']
})
export class AtualizaUsuarioComponent implements OnInit {

  id: number;
  usuario: Usuario;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usuarioService: UsuarioServicoService) { }

  ngOnInit(): void {
    
    this.usuario = new Usuario;
    this.id = this.route.snapshot.params["id"];

    this.usuarioService.getUsuario(this.id)
      .subscribe(dado => this.usuario = dado, erro => console.log(erro));
  }

  onSubmit(usuarioForm){
    this.atualizaUsuario();
  }

  atualizaUsuario(){
    this.usuarioService.atualizaUsuario(this.id,this.usuario)
      .subscribe(dado =>{
         console.log(dado) 
      },
      erro =>{console.log(erro)});

      this.navegarParaListagem();
  }

  navegarParaListagem(){
    this.router.navigate(['usuarios']);
  }
}
