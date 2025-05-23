import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Sucursal } from 'src/app/models/sucursal.model';
import { RepartidorService } from 'src/app/services/repartidor.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-rolrepartidorversucursales',
  templateUrl: './rolrepartidorversucursales.component.html',
  styleUrls: ['./rolrepartidorversucursales.component.scss'],
  providers: [RepartidorService, UsuarioService]
})
export class RolrepartidorversucursalesComponent implements OnInit {
  public token;
  public SucursalModelGet: Sucursal;

  constructor(
    private titleService: Title,
    private _repartidorUsuariosService: RepartidorService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Sucursal repartidor');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.getSucursales();
  }

  //VER SUCURSALES
  getSucursales(){
    this._repartidorUsuariosService.obtenerSucursal(this.token).subscribe(
      (response)=>{
        this.SucursalModelGet = response.sucursales;
        console.log(this.SucursalModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }

}
