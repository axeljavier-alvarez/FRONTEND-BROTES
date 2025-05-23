import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';
import { Pedido } from 'src/app/models/pedido.model';
import Swal from 'sweetalert2';
import { Carrito } from 'src/app/models/carrito.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
  providers: [UsuarioService, ClienteUsuarioService]
})
export class PedidosComponent implements OnInit {
  public token: string;
  public PedidoModelPost: Pedido;
  public CarritosModelGet: Carrito;
  public idCarrito: string;
  public municipiosOpciones: string[] = [];

  clasificacion = [
    { tipo: 'Tarjeta de crédito' },
    { tipo: 'Efectivo' },
  ];
  horario: any[] = [];
  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _clienteUsuarioService: ClienteUsuarioService,
    private _router: Router,
  ) {
    this.titleService.setTitle('Pedidos');
    this.token = this._usuarioService.obtenerToken();
    this.PedidoModelPost = new Pedido(
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
      this.idCarrito = dataRuta.get('idCarrito');
      console.log(this.idCarrito);
    });
    this.horario = this.generateHorarios();
    this.getClienteCarrito();
  }

  getClienteCarrito() {
    this._clienteUsuarioService.verCarritoCliente(this.token).subscribe(
      (response) => {
        this.CarritosModelGet = response.carritos;
        console.log(this.CarritosModelGet);
        this.setMunicipiosOpciones();
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }

  setMunicipiosOpciones() {
    const departamento = this.CarritosModelGet[0]?.compras[0]?.datosSucursal[0]?.departamento;

    // municipio 1
    if (departamento === 'Alta Verapaz') {
      this.municipiosOpciones = [
        "Cobán",
        "San Pedro Carchá",
        "Chisec"
      ];
      // municipio 2
    } else if (departamento === 'Baja Verapaz') {

      this.municipiosOpciones = [
        "Salamá",
        "San Miguel Chicaj",
        "Purulhá"
      ];
      // municipio 3
    } else if (departamento === 'Chimaltenango') {

      this.municipiosOpciones = [
        "Chimaltenango",
        "Parramos",
        "El Tejar"
      ];
    }
    // municipio 4
    else if (departamento === 'Chiquimula') {

      this.municipiosOpciones = [
        "Esquipulas",
        "Olopa",
        "Quezaltepeque"
      ];
    }

    // municipio 5
    else if (departamento === 'El progreso') {

      this.municipiosOpciones = [
        "Guastatoya",
        "Sanarate",
        "Morazán"
      ];
    }

    // municipio 6
    else if (departamento === 'Escuintla') {

      this.municipiosOpciones = [
        "La Democracia",
        "San José",
        "Masagua"
      ];
    }

    // municipio 7
    else if (departamento === 'Guatemala') {

      this.municipiosOpciones = [
        "Guatemala",
        "Mixco",
        "Villa Nueva"
      ];
    }
    // municipio 8
    else if (departamento === 'Huehuetenango') {

      this.municipiosOpciones = [
        "Chiantla",
        "San Sebastián Huehuetenango",
        "San Juan Atitlán"
      ];
    }

    // municipio 9
    else if (departamento === 'Izabal') {

      this.municipiosOpciones = [
        "Puerto Barrios",
        "Morales",
        "Los Amates"
      ];
    }

    // municipio 10
    else if (departamento === 'Jalapa') {

      this.municipiosOpciones = [
        "Jalapa",
        "San Pedro Pinula",
        "Mataquescuintla"
      ];
    }

    // municipio 11
    else if (departamento === 'Jutiapa') {

      this.municipiosOpciones = [
        "Jutiapa",
        "El Adelanto",
        "Asunción Mita"
      ];
    }

    // municipio 12
    else if (departamento === 'Petén') {

      this.municipiosOpciones = [
        "San Benito",
        "La Libertad",
        "San Andrés"
      ];
    }

    // municipio 13
    else if (departamento === 'Quetzaltenango') {

      this.municipiosOpciones = [
        "Quetzaltenango",
        "Almolonga",
        "Cantel"
      ];
    }

    // municipio 14
    else if (departamento === 'Quiché') {

      this.municipiosOpciones = [
        "San Juan Cotzal",
        "Nebaj",
        "Chajul"
      ];
    }

    // municipio 15
    else if (departamento === 'Retalhuleu') {

      this.municipiosOpciones = [
        "Retalhuleu",
        "El Asintal",
        "Champerico"
      ];
    }

    // municipio 16
    else if (departamento === 'Sacatepéquez') {

      this.municipiosOpciones = [
        "Antigua Guatemala",
        "Ciudad Vieja",
        "Alotenango"
      ];
    }

    // municipio 17
    else if (departamento === 'San Marcos') {

      this.municipiosOpciones = [
        "San Marcos",
        "San Pedro Sacatepéquez",
        "San Antonio Sacatepéquez"
      ];
    }

    // municipio 18
    else if (departamento === 'Santa Rosa') {

      this.municipiosOpciones = [
        "Barberena",
        "Cuilapa",
        "Pueblo Nuevo Viñas"
      ];
    }

    // municipio 19
    else if (departamento === 'Sololá') {

      this.municipiosOpciones = [
        "San Andrés Semetabaj",
        "Santa Catarina Palopó",
        "San Antonio Palopó"
      ];
    }

    // municipio 20
    else if (departamento === 'Suchitepéquez') {

      this.municipiosOpciones = [
        "Mazatenango",
        "San Gabriel",
        "Samayac"
      ];
    }

    // municipio 21
    else if (departamento === 'Totonicapán') {

      this.municipiosOpciones = [
        "Totonicapán",
          "San Cristóbal Totonicapán",
          "San Francisco El Alto"
      ];
    }


    // municipio 22
    else if (departamento === 'Zacapa') {

      this.municipiosOpciones = [
          "Zacapa ",
          "Cabañas",
          "Estanzuela"
      ];
    }



    else {
      this.municipiosOpciones = [];
    }
  }

  postPedido(idCarrito) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas generar el pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, generar pedido',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this._clienteUsuarioService
          .agregarPedidoCliente(
            this.PedidoModelPost,
            this.token,
            idCarrito,
          )
          .subscribe({
            next: (response: any) => {
              // Determina la ruta según el tipo de pago
              const tipoPago = this.PedidoModelPost.tipoPago;
              let redirectUrl = '';

              if (tipoPago === 'Tarjeta de crédito') {
                redirectUrl = '/cliente/pagocreditopedidos';
              } else if (tipoPago === 'Efectivo') {
                redirectUrl = '/cliente/pagoefectivopedidos';
              }

              this._router.navigate([redirectUrl]);
              Swal.fire({
                icon: 'success',
                title: 'Éxito!',
                text: 'Pedido generado exitosamente',
                showConfirmButton: false,
                timer: 1500,
                willClose: () => {
                  window.location.reload();
                }
              });
            },
            error: (error) => {
              console.log(<any>error);
              Swal.fire({
                icon: 'error',
                title: "Error al generar el pedido",
                footer: '*Ingrese los datos de nuevo*',
                showConfirmButton: false,
                timer: 2500
              });
            }
          });
      }
    });
  }

  generateHorarios(): any[] {
    const horarios = [];
    let startHour = 8;
    let startMinute = 0;

    while (startHour < 18) {
      const endHour = startMinute === 0 ? startHour : startHour + 1;
      const endMinute = startMinute === 0 ? 30 : 0;

      const startTime = `${startHour.toString().padStart(2, '0')}:${startMinute === 0 ? '00' : '30'}`;
      const endTime = `${endHour.toString().padStart(2, '0')}:${endMinute === 0 ? '00' : '30'}`;

      horarios.push({ hora: `${startTime} - ${endTime}` });

      // Incremento de 30 minutos
      if (startMinute === 0) {
        startMinute = 30;
      } else {
        startMinute = 0;
        startHour++;
      }
    }

    return horarios;
  }
}
