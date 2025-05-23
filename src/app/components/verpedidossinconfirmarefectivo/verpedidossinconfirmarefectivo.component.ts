import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Pedido } from 'src/app/models/pedido.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verpedidossinconfirmarefectivo',
  templateUrl: './verpedidossinconfirmarefectivo.component.html',
  styleUrls: ['./verpedidossinconfirmarefectivo.component.scss'],
  providers: [UsuarioService,ClienteUsuarioService]

})
export class VerpedidossinconfirmarefectivoComponent implements OnInit {

  public token;
  public PedidosModelGet: Pedido;

  constructor(
    private titleService: Title,
    private _clienteUsuarioService: ClienteUsuarioService,
    private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Pedidos sin confirmar efectivo');
    this.token = this._usuarioService.obtenerToken();
   }

  ngOnInit(): void {
    this.getPedidosSinConfirmarEfectivo();
  }

  getPedidosSinConfirmarEfectivo(){
    this._clienteUsuarioService.obtenerPedidosSinConfirmarEfectivo(this.token).subscribe(
      (response) => {
        this.PedidosModelGet = response.pedidos;
        console.log(this.PedidosModelGet);
      },(error) => {
        console.log(<any>error);
      }
    )
  }

  deletePedido(idPedido){
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, se llama al servicio para eliminar
        this._clienteUsuarioService.eliminarPedidosSinConfirmar(idPedido,this.token).subscribe(
          (response) => {
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Eliminado',
              text: 'El pedido ha sido eliminado exitosamente.',
              showConfirmButton: false,
              timer: 1500,
              willClose: () => {
                window.location.reload();
              }
            });
          },(error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo eliminar el pedido.',
              showConfirmButton: false,
              timer: 2500
            });
          }
        );
      }
    });

  }




}
