import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Title } from '@angular/platform-browser';
import { CajeroService } from 'src/app/services/cajero.service';
import { Pedido } from 'src/app/models/pedido.model';
import { Caja } from 'src/app/models/caja.model';
import { Sucursal } from 'src/app/models/sucursal.model';


import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolcajeroverpedidosrepartidor',
  templateUrl: './rolcajeroverpedidosrepartidor.component.html',
  styleUrls: ['./rolcajeroverpedidosrepartidor.component.scss'],
  providers: [UsuarioService, CajeroService]
})
export class RolcajeroverpedidosrepartidorComponent implements OnInit {

  public token;
  public idUsuario: string;
  public repartidorId: string; // Nuevo atributo para almacenar el ID del repartidor

  public PedidoModelGet: Pedido;
  public PedidoModelGetId: Pedido;

  public CajaModelGet: Caja;

  public CajaModelPost: Caja;

  public PedidoModelPost: Pedido;

  public SucursalModelPost: Sucursal;


  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _cajeroService: CajeroService,

    private router: Router,

  ) {
    this.titleService.setTitle('Ver pedidos repartidor');
    this.token = this._usuarioService.obtenerToken();


    this.SucursalModelPost = new Sucursal(
      "",
      "",
      "",
      0,
      "",
      "",
      "",
      [{

        idEmpresa: "",
        nombreEmpresa: "",
        direccion: "",
        telefono: 0
      }],
      [{
        idUsuario: "",
        nombre: "",
        apellido: "",
        email: "",
        rol: ""
      }],
    );

    this.PedidoModelPost = new Pedido(
      "",
      "",
      [{
        idEfectivo: "",
        efectivoCliente: 0,
        cambioCliente: 0,
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


    this.CajaModelPost = new Caja(

      "",
      0,
      0,
      0,
      0,
      0,
      [{
        idSucursal: "",
        nombreSucursal: "",
        direccionSucursal: "",
        telefonoSucursal: "",
        departamento: "",
        municipio: ""
      }],

      [{
        idPedido: "",
        fecha: null,
        tipoPago: "",
        direccionEnvio: "",
        horaEntrega: "",
        metodoEnvio: "",
        descuentos: 0,
        numeroDeOrden: 0,
        estadoPedido: "",
        incrementoEnvio: 0,
        estadoOrden: "",
        horaRepartidorAsignado: null,
        horaPedidoEntregado: null,
        total: 0,

        pagoEfectivo: [{
          idEfectivo: "",
          efectivoCliente: 0,
          cambioCliente: 0,
          totalPedido: 0
        }],


        compras: [{
          idProducto: "",
          nombreProducto: "",
          marca: "",
          cantidad: 0,
          size: "",
          precio: 0,
          subTotal: 0,
          descripcionCategoria: [{
            idCategoria: "",
            nombreCategoria: "",
          }],
          datosSucursal: [{
            idSucursal: "",
            nombreSucursal: "",
            direccionSucursal: "",
            telefonoSucursal: "",
            departamento: "",
            municipio: ""
          }],


        }],

      }],


      [{

        idPedido: "",
        fecha: null,
        tipoPago: "",
        direccionEnvio: "",
        horaEntrega: "",
        metodoEnvio: "",
        descuentos: 0,
        numeroDeOrden: 0,
        estadoPedido: "",
        incrementoEnvio: 0,
        estadoOrden: "",
        horaRepartidorAsignado: null,
        horaPedidoEntregado: null,
        total: 0,
        pagoEfectivo: [{
          idEfectivo: "",
          efectivoCliente: 0,
          cambioCliente: 0,
          totalPedido: 0
        }],

        repartidorAsignado: [{

          idRepartidor: "",
          nombre: "",
          apellido: "",
          email: "",
          telefono: 0,
          rol: "",
          estadoRepartidor: ""
        }],

        compras: [{
          idProducto: "",
          nombreProducto: "",
          marca: "",
          cantidad: 0,
          size: "",
          precio: 0,
          subTotal: 0,
          descripcionCategoria: [{
            idCategoria: "",
            nombreCategoria: "",
          }],
          datosSucursal: [{
            idSucursal: "",
            nombreSucursal: "",
            direccionSucursal: "",
            telefonoSucursal: "",
            departamento: "",
            municipio: ""
          }],

        }],


      }],

      [{

        idPedido: "",
        fecha: null,
        tipoPago: "",
        direccionEnvio: "",
        horaEntrega: "",
        metodoEnvio: "",
        descuentos: 0,
        numeroDeOrden: 0,
        estadoPedido: "",
        incrementoEnvio: 0,
        estadoOrden: "",
        horaRepartidorAsignado: null,
        horaPedidoEntregado: null,

        pagoEfectivo: [{
          idEfectivo: "",
          efectivoCliente: 0,
          cambioCliente: 0,
          totalPedido: 0
        }],

        repartidorAsignado: [{

          idRepartidor: "",
          nombre: "",
          apellido: "",
          email: "",
          telefono: 0,
          rol: "",
          estadoRepartidor: ""
        }],


        compras: [{
          idProducto: "",
          nombreProducto: "",
          marca: "",
          cantidad: 0,
          size: "",
          precio: 0,
          subTotal: 0,
          descripcionCategoria: [{
            idCategoria: "",
            nombreCategoria: "",
          }],
          datosSucursal: [{
            idSucursal: "",
            nombreSucursal: "",
            direccionSucursal: "",
            telefonoSucursal: "",
            departamento: "",
            municipio: ""
          }],

        }],

      }]
    );
    this.PedidoModelGetId = new Pedido(
      "",
      "",
      [{
        idEfectivo: "",
        efectivoCliente: 0,
        cambioCliente: 0,
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
      this.idUsuario = dataRuta.get('idUsuario'); // Asignar el idUsuario a la propiedad de la clase



      if (this.idUsuario) {
        this.getPedidoRepartidor(this.idUsuario); // Usar la propiedad
      }


      console.log(this.idUsuario);  // Deberías ver el idEmpresa correcto aquí

      // this.getProductosSucursales();

    })
  }




  getPedidoRepartidor(idUsuario) {
    this._cajeroService.verPedidoUsuario(idUsuario, this.token).subscribe(
      (response) => {
        this.PedidoModelGet = response.pedidos;

        // Asigna los valores automáticamente si PedidoModelGet tiene datos
        if (this.PedidoModelGet) {
          const primerPedido = this.PedidoModelGet[0]; // Toma el primer pedido
          this.PedidoModelPost.numeroDeOrden = primerPedido?.numeroDeOrden || 0; // Asigna el número de orden, o 0 si no existe
          this.SucursalModelPost.nombreSucursal = primerPedido?.compras?.[0]?.datosSucursal?.[0]?.nombreSucursal || ''; // Asigna el nombre de la sucursal, o vacío si no existe
        }

        console.log(this.PedidoModelGet);
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  // get pedido id

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

  // post confirmar pedido


  postConfirmarPedidoCredito() {
    console.log(this.PedidoModelPost);
    console.log(this.SucursalModelPost);

    // Mostrar el mensaje de confirmación
    Swal.fire({
      title: '¿Está seguro que desea confirmar este pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, confirmar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Proceder a asignar el pedido
        this._cajeroService.confirmarPedidoCredito(
          this.PedidoModelPost,
          this.SucursalModelPost,
          this.token
        ).subscribe({
          next: (response: any) => {
            // Refrescar la página
           //  location.reload(); // Esto refresca la página inmediatamente

            // Mostrar mensaje de éxito
            Swal.fire({
              icon: 'success',
              title: 'Éxito!',
              text: 'Pedido confirmado correctamente',
              showConfirmButton: true,
              confirmButtonText: 'Aceptar',
            }).then(() => {
              this.router.navigate(['/cajero/rolcajeroversucursales']).then(() => {
                location.reload(); // Refresca la página después de la redirección
              });
            });
          },
          error: (error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: "Error al confirmar el orden",
              text: error.error.mensaje || 'Datos incompletos. Por favor, revisa la información.',
              footer: '*Ingrese los datos de nuevo*',
              showConfirmButton: false,
              timer: 2500
            });
          }
        });
      }
    });
}



postConfimarPedidoGeneradoEfectivo() {
  console.log(this.PedidoModelPost);
  console.log(this.SucursalModelPost);
  console.log(this.CajaModelPost);

  // Mostrar el mensaje de confirmación
  Swal.fire({
    title: '¿Está seguro que desea confirmar este pedido?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, confirmar',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      // Proceder a asignar el pedido
      this._cajeroService.confirmarPedidoGeneradoEfectivo(
        this.PedidoModelPost,
        this.SucursalModelPost,
        this.CajaModelPost,
        this.token
      ).subscribe({
        next: (response: any) => {
          // Refrescar la página
          // location.reload(); // Esto refresca la página inmediatamente

          // Mostrar mensaje de éxito
          Swal.fire({
            icon: 'success',
            title: 'Éxito!',
            text: 'Pedido confirmado correctamente',
            showConfirmButton: true,
            confirmButtonText: 'Aceptar',
          }).then(() => {
            this.router.navigate(['/cajero/rolcajeroversucursales']).then(() => {
              location.reload(); // Refresca la página después de la redirección
            });
          });
        },
        error: (error) => {
          console.log(<any>error);
          Swal.fire({
            icon: 'error',
            title: "Error al asignar la orden",
            text: error.error.mensaje || 'Datos incompletos. Por favor, revisa la información.',
            footer: '*Ingrese los datos de nuevo*',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
    }
  });
}



}
