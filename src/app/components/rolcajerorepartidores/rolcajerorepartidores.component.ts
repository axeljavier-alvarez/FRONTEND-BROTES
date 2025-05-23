import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CajeroService } from 'src/app/services/cajero.service';
import { Usuario } from 'src/app/models/usuarios.model';
import { Pedido } from 'src/app/models/pedido.model';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolcajerorepartidores',
  templateUrl: './rolcajerorepartidores.component.html',
  styleUrls: ['./rolcajerorepartidores.component.scss'],
  providers: [UsuarioService, CajeroService]
})
export class RolcajerorepartidoresComponent implements OnInit {
  public token: string;
  public idSucursal: string;
  public UsuarioModelGet: Usuario[] = [];
  public UsuarioModelGetId: Usuario;
  public PedidoModelPost: Pedido;
  public UsuarioModelPost: Usuario;
  public UsuarioModelGet2: Usuario[] = [];

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _cajeroService: CajeroService
  ) {
    this.titleService.setTitle('Repartidores');
    this.token = this._usuarioService.obtenerToken();
    this.UsuarioModelGetId = new Usuario("", "", "", "", "", "", 0, "", "", "", "", "", "");
    this.UsuarioModelPost = new Usuario("", "", "", "", "", "", 0, "", "", "", "", "", "");

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
    this._activatedRoute.paramMap.subscribe(() => {
      this.idSucursal = localStorage.getItem('idSucursal');
      if (this.idSucursal) {
        this.getRepartidoresPorSucursal(this.idSucursal, this.token);
        this.getRepartidoresOcupadosPorIdSucursal(this.idSucursal, this.token);
      }
    });
  }

  getRepartidoresPorSucursal(idSucursal: string, token: string) {
    this._cajeroService.obtenerRepartidoresPorSucursal(idSucursal, token).subscribe(
      (response) => {
        this.UsuarioModelGet = response.usuarios;
      },
      (error) => {
        console.error('Error al obtener repartidores:', error);
      }
    );
  }


  getRepartidoresOcupadosPorIdSucursal(idSucursal: string, token: string) {
    this._cajeroService.obtenerRepartidoresOcupadosPorIdSucursal(idSucursal, token).subscribe(
      (response) => {
        this.UsuarioModelGet2 = response.usuarios;
      },
      (error) => {
        console.error('Error al obtener repartidores:', error);
      }
    );
  }



  getUsuarioId(idUsuario: string) {
    this._cajeroService.obtenerRolRepartidorId(idUsuario, this.token).subscribe(
      (response) => {
        this.UsuarioModelGetId = response.usuario;
      },
      (error) => {
        console.error('Error al obtener usuario por ID:', error);
      }
    );
  }

  postAsignarPedido() {
    // Verifica los datos de la tarjeta y de la factura
    console.log(this.UsuarioModelGetId);
    console.log(this.PedidoModelPost); // Verifica los datos de la factura

    // Mostrar el mensaje de confirmación
    Swal.fire({
      title: '¿Está seguro que desea asignar este pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, asignar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Aquí se procede a asignar el pedido
        this._cajeroService.asignarPedidoRepartidor(
          this.UsuarioModelGetId,
          this.PedidoModelPost,
          this.token
        ).subscribe({
          next: (response: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito!',
              text: 'Orden asignada exitosamente',
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              // Refrescar la página después de que se cierre el mensaje de éxito
              location.reload();
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
