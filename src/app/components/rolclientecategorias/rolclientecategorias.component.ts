import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Categoria } from 'src/app/models/categoria.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';

@Component({
  selector: 'app-rolclientecategorias',
  templateUrl: './rolclientecategorias.component.html',
  styleUrls: ['./rolclientecategorias.component.scss'],
  providers: [ UsuarioService, ClienteUsuarioService]
})

export class RolclientecategoriasComponent implements OnInit {

  public token;
  public CategoriasModelGet: Categoria;

  constructor(
    private titleService: Title,
    private _clienteUsuarioService: ClienteUsuarioService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol cliente Categorias');
    this.token = this._usuarioService.obtenerToken();
   }
  

  ngOnInit(): void {
    this.getCategorias();
  }


  getCategorias(){
    this._clienteUsuarioService.obtenerCategotiasRolCliente(this.token).subscribe(
      (response) => {
        this.CategoriasModelGet = response.categorias;
        console.log(this.CategoriasModelGet);
      }, (error) => {
        console.log(<any>error);
      }
    )
  }

}
