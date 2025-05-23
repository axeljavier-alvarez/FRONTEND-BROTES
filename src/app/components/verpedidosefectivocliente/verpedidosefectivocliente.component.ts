import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { Pedido } from 'src/app/models/pedido.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';

@Component({
  selector: 'app-verpedidosefectivocliente',
  templateUrl: './verpedidosefectivocliente.component.html',
  styleUrls: ['./verpedidosefectivocliente.component.scss'],
  providers: [UsuarioService,ClienteUsuarioService]

})
export class VerpedidosefectivoclienteComponent implements OnInit {


  public token;
  public PedidosModelGet: Pedido;

  constructor(
    private titleService: Title,
    private _clienteUsuarioService: ClienteUsuarioService,
    private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Pedidos confirmados efectivo');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.getPedidosConfirmadosEfectivo();
  }


  getPedidosConfirmadosEfectivo(){
    this._clienteUsuarioService.verPedidosConfirmadosEfectivo(this.token).subscribe(
      (response) => {
        this.PedidosModelGet = response.pedidos;
        console.log(this.PedidosModelGet);
      },(error) => {
        console.log(<any>error);
      }
    )
  }

}
