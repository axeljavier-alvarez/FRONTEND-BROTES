import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CajeroService } from 'src/app/services/cajero.service';
import { Pedido } from 'src/app/models/pedido.model';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolcajeroefectivopedidosconfirmados',
  templateUrl: './rolcajeroefectivopedidosconfirmados.component.html',
  styleUrls: ['./rolcajeroefectivopedidosconfirmados.component.scss'],
  providers: [UsuarioService, CajeroService]

})
export class RolcajeroefectivopedidosconfirmadosComponent implements OnInit {

  public token;
  public idSucursal;
  public PedidoModelGet: Pedido;
  public PedidoModelGetId: Pedido;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _cajeroService: CajeroService,
    private router: Router // Inyecta Router aquí

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
        this.getPedidosConfirmadosEfectivo(this.idSucursal, this.token); // Llamar al nuevo método
      }

      console.log(this.idSucursal);  // Verificar el idSucursal
    });

  }


  getPedidosConfirmadosEfectivo( idSucursal: string, token: string) {
    this._cajeroService
      .verPedidosConfirmadosEfectivo(idSucursal, token)
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

  getPedidoId(idPedido: string) {
    this._cajeroService.obtenerPedidoPorId(idPedido, this.token).subscribe(
      (response) => {
        console.log(response);
        this.PedidoModelGetId = response.pedidos;

        // Almacena el objeto del pedido en localStorage
        localStorage.setItem('pedido', JSON.stringify(this.PedidoModelGetId));
      },
      (error) => {
        console.log(error);
      }
    );
  }

  actualizarEstado(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.PedidoModelGetId.estadoOrden = selectElement.value;
  }


  confirmarGenerarFactura(pedidoId: string) {
    Swal.fire({
      title: '¿Está seguro?',
      text: '¿Desea generar una factura, debe tener el estao de la orden como preparando su pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, generar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['/cajero/rolcajerogenerarfacturaefectivo', pedidoId]);
      }
    });
  }

}
