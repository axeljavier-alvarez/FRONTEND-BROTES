import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Pedido } from 'src/app/models/pedido.model';
import { RepartidorService } from 'src/app/services/repartidor.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-rolrepartidorverpedido',
  templateUrl: './rolrepartidorverpedido.component.html',
  styleUrls: ['./rolrepartidorverpedido.component.scss'],
  providers: [RepartidorService, UsuarioService]

})
export class RolrepartidorverpedidoComponent implements OnInit {

  public token;
  public PedidoModelGet: Pedido;

  constructor(
    private titleService: Title,
    private _repartidorUsuariosService: RepartidorService,
    private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Ver pedido');
    this.token = this._usuarioService.obtenerToken();

   }

  ngOnInit(): void {
    this.getPedido();
  }


  getPedido(){
    this._repartidorUsuariosService.verPedidosUsuario(this.token).subscribe(
      (response)=>{
        this.PedidoModelGet = response.pedidos;
        console.log(this.PedidoModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }


}
