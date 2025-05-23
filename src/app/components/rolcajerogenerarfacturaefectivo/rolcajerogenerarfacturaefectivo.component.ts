import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CajeroService } from 'src/app/services/cajero.service';
import { Factura } from 'src/app/models/factura.model';
import { Sucursal } from 'src/app/models/sucursal.model';
import { Pedido } from 'src/app/models/pedido.model';

import { Caja } from 'src/app/models/caja.model';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rolcajerogenerarfacturaefectivo',
  templateUrl: './rolcajerogenerarfacturaefectivo.component.html',
  styleUrls: ['./rolcajerogenerarfacturaefectivo.component.scss'],
  providers: [UsuarioService, CajeroService]
})
export class RolcajerogenerarfacturaefectivoComponent implements OnInit {

  public token: string;
  public idPedido: string;

  public FacturaModelPost: Factura;
  public SucursalModelPost: Sucursal;

  public PedidoModelPost: Pedido;
  public CajaModelPost: Caja;

  public CajaModelGet: Caja;


  constructor(
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _cajeroService: CajeroService,
    private router: Router,
    public _activatedRoute: ActivatedRoute,

  ) {
    this.titleService.setTitle('Generar facturas');
    this.token = this._usuarioService.obtenerToken();

    this.FacturaModelPost = new Factura("", null,

      [{
        idCajero: "",
        nombre: "",
        apellido: "",
        email: "",
      }],

      [{
        idUsuario: "",
        nombre: "",
        apellido: "",
        email: ""
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
      }],
      [{
        idProducto: "",
        nombreProducto: "",
        cantidad: 0,
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
          telefonoSucursal: ""
        }]
      }],
      0
    );

    this.SucursalModelPost = new Sucursal(
      '',
      '',
      '',
      0,
      '',
      '',
      '',
      [
        {
          idEmpresa: '',
          nombreEmpresa: '',
          direccion: '',
          telefono: 0,
        },
      ],
      [
        {
          idUsuario: '',
          nombre: '',
          apellido: '',
          email: '',
          rol: '',
        },
      ]
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
    )



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


  }
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.getCajaUsuario();
      this.idPedido = dataRuta.get('idPedido'); // Recupera el idPedido de la ruta



      console.log(this.idPedido); // Verifica que el idPedido se haya recuperado correctamente

      const pedidoJson = localStorage.getItem('pedido'); // Recupera el objeto del localStorage
      if (pedidoJson) {
        this.PedidoModelPost = JSON.parse(pedidoJson); // Parsea el objeto almacenado
        console.log(this.PedidoModelPost);  // Verifica que el objeto se haya recuperado correctamente

        // Asigna los valores de nit y cambioCliente a los inputs
        if (this.PedidoModelPost.pagoEfectivo.length > 0) {
          this.FacturaModelPost.nit = this.PedidoModelPost.pagoEfectivo[0].nit;
          this.CajaModelPost.vueltosCliente = this.PedidoModelPost.pagoEfectivo[0].cambioCliente;
        }
      }
    });
  }




  postFacturaEfectivo(idEmpresa) {
    Swal.fire({
      title: '¿Está seguro que desea generar la factura?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, generar factura!',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._cajeroService.generarFacturaPagoEfectivo(
          this.FacturaModelPost,
          this.SucursalModelPost,
          this.CajaModelPost,
          this.token,
          idEmpresa,
        ).subscribe({
          next: (response: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito!',
              text: 'Factura agregada exitosamente',
              showConfirmButton: false,
              timer: 1500,
              willClose: () => {
                localStorage.removeItem('pedido'); // Limpia el objeto del localStorage
                this.router.navigate(['/cajero/rolcajeroverfacturasgeneradas']);
              }
            });
          },
          error: (error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: "Error al generar la factura",
              text: error.error.mensaje || 'Datos incompletos. Por favor, revisa la información.',
              footer: '*Inténtelo de nuevo*',
              showConfirmButton: false,
              timer: 2500
            });
          }
        });
      }
    });
  }

  getCajaUsuario() {
    this._cajeroService.verCajaPorUsuario(this.token).subscribe(
      (response) => {
        this.CajaModelGet = response.cajas;
        console.log(this.CajaModelGet);

        // Asume que siempre hay al menos una caja y una sucursal
        const sucursal = this.CajaModelGet[0]?.datosSucursal[0]; // Usa el operador de encadenamiento opcional
        if (sucursal) {
          this.SucursalModelPost.nombreSucursal = sucursal.nombreSucursal; // Asigna el nombre de la sucursal
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  seleccionarSucursal(caja: Caja) {
    if (caja.datosSucursal.length > 0) {
      const sucursal = caja.datosSucursal[0];
      console.log(typeof sucursal.nombreSucursal); // Verifica el tipo
      this.SucursalModelPost.nombreSucursal = sucursal.nombreSucursal; // Esto debe ser de tipo string
    }
  }

}
