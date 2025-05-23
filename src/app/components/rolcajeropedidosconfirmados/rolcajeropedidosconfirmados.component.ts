import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CajeroService } from 'src/app/services/cajero.service';
import { Pedido } from 'src/app/models/pedido.model';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolcajeropedidosconfirmados',
  templateUrl: './rolcajeropedidosconfirmados.component.html',
  styleUrls: ['./rolcajeropedidosconfirmados.component.scss'],
  providers: [UsuarioService, CajeroService]

})
export class RolcajeropedidosconfirmadosComponent implements OnInit {

  public token;
  public idSucursal;
  public PedidoModelGet: Pedido;
  public PedidoModelGetId: Pedido;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _cajeroService: CajeroService
  ) {
    this.titleService.setTitle('Pedidos confirmados');
    this.token = this._usuarioService.obtenerToken();
    this.PedidoModelGetId = new Pedido(
      "",
      "",
      [{
        idEfectivo: "",
        efectivoCliente: 0,
        cambioCliente:0,
        totalPedido: 0,
        nit: "",
      }],
      null,
      "",
      "",
      "",
      "",
      "",
      "",
      0,
      0,
      "",
      0,
      "",
      "",
      "",
      null,
      null,
      [{
        idUsuario: "",
        nombre: "",
        apellido: "",
        email: "",
        telefono: 0
      }],
      [{
        idRepartidor: "",
        nombre: "",
        apellido: "",
        email: "",
        telefono: 0,
        rol: "",
        estadoRepartidor: ""
      }],
      [{
        idProducto: "",
        nombreProducto: "",
        marca: "",
        cantidad: 0,
        size: "",
        precio: 0,
        subTotal: 0,
        descripcionCategoria: [{
          idCategoria: "",
          nombreCategoria: ""
        }],
        datosSucursal: [{
          idSucursal: "",
          nombreSucursal: "",
          direccionSucursal: "",
          telefonoSucursal: "",
          departamento: "",
          municipio: ""
        }]
      }],

      [{

        idCajero: "",
        nombre: "",
        apellido: "",
        email: "",
      }],

      0
    );
  }



  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idSucursal = localStorage.getItem('idSucursal'); // Obtener el idSucursal

      if (this.idSucursal) {
        this.getPedidosConfirmados(this.idSucursal, this.token); // Llamar al nuevo método
      }

      console.log(this.idSucursal);  // Verificar el idSucursal
    });

  }

  getPedidosConfirmados( idSucursal: string, token: string) {
    this._cajeroService
      .obtenerPedidosConfirmadosPorSucursal(idSucursal, token)
      .subscribe(
        (response) => {
          this.PedidoModelGet = response.pedidos; // Asignar los productos a la variable
          console.log(this.PedidoModelGet); // Verifica la respuesta
        },
        (error) => {
          console.log(<any>error); // Manejo de errores
        }
      );
  }


  putPedidos() {
    this._cajeroService.editarPedido(this.PedidoModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);

        Swal.fire({
          icon: 'success',
          title: 'Éxito!',
          text: 'Pedido editado correctamente',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          // Refresca la página después de que se cierre la alerta
          location.reload();
        });
      },
      (error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Error en el pedido",
          footer: '*Intentelo de nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    );
  }


  getPedidoId(idPedido) {

    this._cajeroService.obtenerPedidoPorId(idPedido, this.token).subscribe(

      (response) => {
        console.log(response);

        this.PedidoModelGetId = response.pedidos;

      },

      (error) => {
        console.log(error)

      }
    )
  }

  actualizarEstado(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.PedidoModelGetId.estadoOrden = selectElement.value;
  }

}
