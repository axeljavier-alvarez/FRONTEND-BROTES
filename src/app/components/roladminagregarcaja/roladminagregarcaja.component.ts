import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Usuario } from 'src/app/models/usuarios.model';
import { Caja } from 'src/app/models/caja.model';
import { Sucursal } from 'src/app/models/sucursal.model';

import { AdminUsuariosService } from 'src/app/services/admin-usuarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roladminagregarcaja',
  templateUrl: './roladminagregarcaja.component.html',
  styleUrls: ['./roladminagregarcaja.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]
})
export class RoladminagregarcajaComponent implements OnInit {


  public token;
  public CajaModelGet: Caja;
  public CajaModelPost: Caja;
  public CajaModelGetId: Caja;
  public SucursalModelPost: Sucursal;
  public nombreSucursal: string = '';
  public SucursalesModelGet: Sucursal[] = []; // Inicializa como un arreglo vacío

  constructor(
    private titleService: Title,
    private _adminUsuariosService: AdminUsuariosService,
    private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Caja sucursales');
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

    this.CajaModelGetId = new Caja(


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
  }

  ngOnInit(): void {
    this.getCajasGeneral();
    this.cargarSucursales();

  }


  onSucursalChange() {
    const selectedSucursal = this.SucursalesModelGet.find(sucursal => sucursal._id === this.SucursalModelPost._id);

    if (selectedSucursal) {
      this.SucursalModelPost.nombreSucursal = selectedSucursal.nombreSucursal;
    } else {
      this.SucursalModelPost.nombreSucursal = ''; // Limpia el campo si no se encuentra
    }
  }

  getCajasGeneral() {
    this._adminUsuariosService.obtenerTodasCajas(this.token).subscribe(
      (response) => {
        this.CajaModelGet = response.caja;
        console.log(this.CajaModelGet);
      }, (error) => {
        console.log(<any>error);
      }
    )
  }




  postAsignarCaja() {
    // Verifica los datos de la tarjeta y de la factura

    console.log(this.CajaModelPost); // Verifica los datos de la factura
    console.log(this.SucursalModelPost);

    // Aquí podrías agregar validaciones adicionales si es necesario

    this._adminUsuariosService.agregarCajaSucursal(

      this.SucursalModelPost,
      this.CajaModelPost,

      this.token
    ).subscribe({
      next: (response: any) => {
        this.getCajasGeneral();
        Swal.fire({
          icon: 'success',
          title: 'Éxito!',
          text: 'Caja asignada exitosamente',
          showConfirmButton: false,
          timer: 1500,

        });
      },
      error: (error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Error al asignar la caja",
          text: error.error.mensaje || 'Datos incompletos. Por favor, revisa la información.',
          footer: '*Ingrese los datos de nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    });
  }


  cargarSucursales() {
    this._adminUsuariosService.obtenerSucursales(this.token).subscribe(
      (response) => {
        this.SucursalesModelGet = response.sucursales;
        console.log(this.SucursalesModelGet)
      }, (error) => {
        console.log('Error al cargar sucursales', error);
      }
    );
  }

  deleteCaja(idCaja) {
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
        this._adminUsuariosService.eliminarCajaSucursal(idCaja, this.token).subscribe(
          (response) => {
            console.log(response);
            this.getCajasGeneral(); // Actualiza la lista después de eliminar
            Swal.fire({
              icon: 'success',
              title: 'Eliminada',
              text: 'La caja ha sido eliminada exitosamente.',
              showConfirmButton: false,
              timer: 1500
            });
          },
          (error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo eliminar la caja.',
              showConfirmButton: false,
              timer: 2500
            });
          }
        );
      }
    });
  }

  //BUSCAR CAJA POR ID
  getCajaId(idCaja) {
    this._adminUsuariosService.obtenerCajaId(idCaja, this.token).subscribe(
      (response) => {
        console.log(response);
        this.CajaModelGetId = response.caja;
      }, (error) => {
        console.log(error);
      }
    )
  }

  //EDITAR CAJA
  putCaja() {
    this._adminUsuariosService.editarCajaSucursal(this.CajaModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getCajasGeneral();
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Caja editada correctamente',
          showConfirmButton: false,
          timer: 1500
        });
      },
      (error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Datos incorrectos",
          footer: '*Ingrese los datos nuevamente*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    )
  }

}
