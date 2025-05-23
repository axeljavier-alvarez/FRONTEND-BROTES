import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Sucursal } from 'src/app/models/sucursal.model';
import { CajeroService } from 'src/app/services/cajero.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-rolcajeroversucursales',
  templateUrl: './rolcajeroversucursales.component.html',
  styleUrls: ['./rolcajeroversucursales.component.scss'],
  providers: [CajeroService, UsuarioService]
})
export class RolcajeroversucursalesComponent implements OnInit {
  public token;
  public SucursalModelGet: Sucursal;

  constructor(
    private titleService: Title,
    private _cajeroUsuariosService: CajeroService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Sucursal cajero');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.getSucursales();
  }

  //VER SUCURSALES
  getSucursales(){
    this._cajeroUsuariosService.obtenerSucursal(this.token).subscribe(
      (response)=>{
        this.SucursalModelGet = response.sucursales;
        console.log(this.SucursalModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

}
