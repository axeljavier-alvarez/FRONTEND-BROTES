import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Usuario } from 'src/app/models/usuarios.model';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rolgestorverempleados',
  templateUrl: './rolgestorverempleados.component.html',
  styleUrls: ['./rolgestorverempleados.component.scss'],
  providers: [GestorUsuarioService, UsuarioService]

})
export class RolgestorverempleadosComponent implements OnInit {


  public token;
  public UsuarioModelGet: Usuario;
  public idSucursal: string;
  public campoBusqueda: string = '';
  public buscar;
  
  constructor(
    public _activatedRoute: ActivatedRoute,

    private titleService: Title,
    private _gestorCategoriasServices: GestorUsuarioService,
    private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Inventario');
    this.token = this._usuarioService.obtenerToken();
   }

   ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      //this.idEmpresa = localStorage.getItem('idEmpresa'); // Asignar correctamente
      this.idSucursal = dataRuta.get('idSucursal'); // Asignar el idUsuario a la propiedad de la clase

      if (this.idSucursal) {
        this.getEmpleados(this.idSucursal); // Usar la propiedad
      }




      console.log(this.idSucursal);
    });
  }


  getEmpleados(idSucursal) {
    this.
    _gestorCategoriasServices.obtenerUsuariosSucursal(idSucursal, this.token)
      .subscribe(
        (response) => {
          this.UsuarioModelGet = response.usuarios;
          console.log(this.UsuarioModelGet);
        },
        (error) => {
          console.log(<any>error);
        }
      );
  }


}
