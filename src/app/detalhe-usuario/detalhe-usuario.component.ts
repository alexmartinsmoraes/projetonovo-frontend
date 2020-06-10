import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioServicoService } from '../usuario-servico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

  id:number;
  usuario:Usuario;

  constructor(private usuarioService:UsuarioServicoService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.id = this.route.snapshot.params['id'];

    this.usuarioService.getUsuario(this.id)
      .subscribe(dado =>this.usuario = dado),
      erro => console.log(erro);
  }

  retornaAListagem(){
    this.router.navigate(['usuarios']);
  }

}
