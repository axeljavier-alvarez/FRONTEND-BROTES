import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturadorService } from 'src/app/services/facturador.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Caja } from 'src/app/models/caja.model';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolfacturadoradmincaja',
  templateUrl: './rolfacturadoradmincaja.component.html',
  styleUrls: ['./rolfacturadoradmincaja.component.scss'],
  providers: [FacturadorService, UsuarioService]
})
export class RolfacturadoradmincajaComponent implements OnInit {

  public token: string;
  public idSucursal: string;
  public CajaModelGet: Caja[]; // Cambiar a un arreglo
  public CajaModelGetId: Caja;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _facturadorService: FacturadorService

  ) {
    this.titleService.setTitle('Administrar caja');
    this.token = this._usuarioService.obtenerToken();
    this.CajaModelGetId = new Caja("",
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
    this._activatedRoute.paramMap.subscribe(() => {
      this.idSucursal = localStorage.getItem('idSucursal');
      if (this.idSucursal) {
        this.getCajaPorSucursal(this.idSucursal, this.token);
      }
    });
  }

   //BUSCAR CAJA POR ID
   getCajaId(idCaja) {
    this._facturadorService.obtenerCajaId(idCaja, this.token).subscribe(
      (response) => {
        console.log(response);
        this.CajaModelGetId = response.caja;
      }, (error) => {
        console.log(error);
      }
    )
  }

  putCaja() {
    this._facturadorService.editarCajaSucursal(this.CajaModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Éxito!',
          text: 'Caja editada correctamente',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          // Refresca la página después de que se cierra la alerta
          location.reload();
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
    );
  }


  getCajaPorSucursal(idSucursal: string, token: string) {
    this._facturadorService
      .verCajaPorSucursal(idSucursal, token)
      .subscribe(
        (response) => {
          this.CajaModelGet = Array.isArray(response.caja) ? response.caja : [response.caja]; // Asegúrate de que sea un arreglo
          console.log(this.CajaModelGet); // Verifica la respuesta
        },
        (error) => {
          console.log(<any>error); // Manejo de errores
        }
      );
  }

}
