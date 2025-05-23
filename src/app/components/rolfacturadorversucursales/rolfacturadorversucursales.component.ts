import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Sucursal } from 'src/app/models/sucursal.model';
import { FacturadorService } from 'src/app/services/facturador.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-rolfacturadorversucursales',
  templateUrl: './rolfacturadorversucursales.component.html',
  styleUrls: ['./rolfacturadorversucursales.component.scss'],
  providers: [FacturadorService, UsuarioService]
})
export class RolfacturadorversucursalesComponent implements OnInit {
  public token;
  public SucursalModelGet: Sucursal;

  constructor(
    private titleService: Title,
    private _facturadorUsuariosService: FacturadorService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Sucursal facturador');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.getSucursales();
  }

  //VER SUCURSALES
  getSucursales(){
    this._facturadorUsuariosService.obtenerSucursal(this.token).subscribe(
      (response)=>{
        this.SucursalModelGet = response.sucursales;
        console.log(this.SucursalModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

}
