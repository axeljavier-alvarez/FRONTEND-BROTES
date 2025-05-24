import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Categoria } from 'src/app/models/categoria.model';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-vertiposdeplantasempleado',
  templateUrl: './vertiposdeplantasempleado.component.html',
  styleUrls: ['./vertiposdeplantasempleado.component.scss'],
  providers: [GestorUsuarioService, UsuarioService]
})
export class VertiposdeplantasempleadoComponent implements OnInit
{

  public token;
  public CategoriasModelGet: Categoria;


  constructor(
    private titleService: Title,
        private _gestorUsuarioService: GestorUsuarioService,
        private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Rol admin categorias');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this._gestorUsuarioService.obtenerCategoriasRolGestor(this.token).subscribe(
      (response) => {
        this.CategoriasModelGet = response.categorias;
        console.log(this.CategoriasModelGet);
      }, (error) => {
        console.log(<any>error);
      }
    )
  }


}
