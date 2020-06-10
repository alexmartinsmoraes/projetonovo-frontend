import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServicoService {

 private readonly USUARIO_SERVICO_API="http://localhost:3000/usuarios";

  constructor(private http:HttpClient) { }

  getUsuarios():Observable<any>{
    return this.http.get(this.USUARIO_SERVICO_API);
  }

  getUsuario(id:number):Observable<any>{
    return this.http.get(`${this.USUARIO_SERVICO_API}/${id}`);
  }
 
  deletausuario(id:number):Observable<any>{
     return this.http.delete(`${this.USUARIO_SERVICO_API}/${id}`,{responseType:'text'});
     
  }
    
  criaUsuario(usuario:Object):Observable<any>{
    return this.http.post(`${this.USUARIO_SERVICO_API}`,usuario);
  }

  atualizaUsuario(id:number, usuario:any):Observable<any>{
    return this.http.put(`${this.USUARIO_SERVICO_API}/${id}`,usuario);
  }


}
