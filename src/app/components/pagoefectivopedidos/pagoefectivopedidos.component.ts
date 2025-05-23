import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';
import { Factura } from 'src/app/models/factura.model';
import { Tarjeta } from 'src/app/models/tarjeta.model';
import { Pedido } from 'src/app/models/pedido.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagoefectivopedidos',
  templateUrl: './pagoefectivopedidos.component.html',
  styleUrls: ['./pagoefectivopedidos.component.scss'],
  providers: [UsuarioService, ClienteUsuarioService]
})
export class PagoefectivopedidosComponent implements OnInit {
  
  selectedOption: string = 'ingresarNit'; // Opción por defecto
  inputValue: string = ''; // Inicialmente vacío

  onOptionChange(option: string) {
    this.selectedOption = option;

    if (option === 'consumidorFinal') {
      this.inputValue = 'consumidor final'; // Asigna el valor cuando seleccionas esta opción
    } else {
      this.inputValue = ''; // Limpia el input al seleccionar "Ingresar NIT"
    }
  }

  public token: string;
  public PedidoModelPost: Pedido;
  public PedidoModelGet: Pedido;

  constructor(
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _clienteUsuarioService: ClienteUsuarioService,
    private router: Router // Inyección del Router

  ) {
    this.titleService.setTitle('Pagar con efectivo');
    this.token = this._usuarioService.obtenerToken();

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

    this.getPedidosSinConfirmar();
  }


  postConfirmarPedido() {
    // Mensaje de confirmación antes de proceder
    Swal.fire({
      title: '¿Está seguro?',
      text: '¿Desea confirmar esta orden?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, confirmar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      // Si el usuario confirma, proceder con la confirmación del pedido
      if (result.isConfirmed) {
        // Verifica los datos del pedido
        console.log(this.PedidoModelPost); // Verifica los datos del pedido
  
        // Asegúrate de que el arreglo 'pagoEfectivo' no esté vacío antes de asignar el valor
        if (this.PedidoModelPost.pagoEfectivo && this.PedidoModelPost.pagoEfectivo.length > 0) {
          this.PedidoModelPost.pagoEfectivo[0].nit = this.selectedOption === 'ingresarNit' ? this.inputValue : 'consumidor final';
        }
  
        // Aquí podrías agregar validaciones adicionales si es necesario
  
        this._clienteUsuarioService.confirmarPedidoEfectivo(
          this.PedidoModelPost,
          this.token
        ).subscribe({
          next: (response: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito!',
              text: 'Pedido confirmado exitosamente',
              showConfirmButton: false,
              timer: 1500,
              willClose: () => {
                this.router.navigate(['/cliente/verpedidosefectivocliente']); // Redirigir a la nueva vista
              }
            });
          },
          error: (error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: "Error al confirmar el pedido",
              text: error.error.mensaje || 'Datos incompletos. Por favor, revisa la información.',
              footer: '*Ingrese los datos de nuevo*',
              showConfirmButton: false,
              timer: 2500
            });
          }
        });
      } else {
        // Si el usuario cancela, puedes mostrar un mensaje opcional o simplemente hacer nada
        Swal.fire({
          icon: 'info',
          title: 'Cancelado',
          text: 'La confirmación del pedido ha sido cancelada.',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }
  


  getPedidosSinConfirmar() {
    this._clienteUsuarioService.obtenerPedidosSinConfirmarEfectivo(this.token).subscribe(
      (response) => {
        this.PedidoModelGet = response.pedidos;
        console.log(this.PedidoModelGet);
      }, (error) => {
        console.log(<any>error);
      }
    )
  }

}
