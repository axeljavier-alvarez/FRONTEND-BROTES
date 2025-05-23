import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';
import { Factura } from 'src/app/models/factura.model';
import { Tarjeta } from 'src/app/models/tarjeta.model';
import { Pedido } from 'src/app/models/pedido.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pagocreditopedidos',
  templateUrl: './pagocreditopedidos.component.html',
  styleUrls: ['./pagocreditopedidos.component.scss'],
  providers: [UsuarioService, ClienteUsuarioService]
})
export class PagocreditopedidosComponent implements OnInit {

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
  public FacturaModelPost: Factura;
  public TarjetaModelPost: Tarjeta; // Nueva variable para el modelo de tarjeta
  public PedidoModelGet: Pedido;

  constructor(
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _clienteUsuarioService: ClienteUsuarioService,
    private router: Router // Inyección del Router
  ) {
    this.titleService.setTitle('Completar pago');
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

    // Inicializa el modelo de tarjeta
    this.TarjetaModelPost = new Tarjeta(
      "",
      0,
      0,
      "",
      0,
      0,
      0,
      ""
    );
  }

  postFactura() {
    this.FacturaModelPost.nit = this.selectedOption === 'consumidorFinal' ? this.inputValue : this.FacturaModelPost.nit;
    // Mensaje de confirmación antes de proceder
    Swal.fire({
      title: '¿Está seguro?',
      text: '¿Desea pagar este pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, pagar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      // Si el usuario confirma, proceder con la generación de la factura
      if (result.isConfirmed) {
        // Verifica los datos de la tarjeta y de la factura
        console.log(this.TarjetaModelPost);
        console.log(this.FacturaModelPost); // Verifica los datos de la factura

        // Aquí podrías agregar validaciones adicionales si es necesario

        this._clienteUsuarioService.generarFacturaRolCliente(
          this.FacturaModelPost,
          this.TarjetaModelPost,
          this.token
        ).subscribe({
          next: (response: any) => {
            Swal.fire({
              icon: 'success',
              title: 'Éxito!',
              text: 'Factura generada exitosamente',
              showConfirmButton: false,
              timer: 1500,
              willClose: () => {
                this.router.navigate(['/cliente/verpedidoscliente']); // Redirigir a la nueva vista
              }
            });
          },
          error: (error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: "Error al generar la factura",
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
          text: 'El pago ha sido cancelado.',
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  }

  getPedidosEnEspera() {
    this._clienteUsuarioService.obtenerPedidosEnEspera(this.token).subscribe(
      (response) => {
        this.PedidoModelGet = response.pedidos;
        console.log(this.PedidoModelGet);
      }, (error) => {
        console.log(<any>error);
      }
    )
  }


  ngOnInit(): void {
    this.getPedidosEnEspera();
    this.initTarjetaForm();
  }

  initTarjetaForm() {

    // Referencias a elementos del DOM con tipos correctos
    const tarjeta = document.querySelector<HTMLDivElement>('#tarjeta')!;
    const btnAbrirFormulario = document.querySelector<HTMLButtonElement>('#btn-abrir-formulario')!;
    const formulario = document.querySelector<HTMLFormElement>('#formulario-tarjeta')!;
    const numeroTarjeta = document.querySelector<HTMLSpanElement>('#tarjeta .numero')!;
    const nombreTarjeta = document.querySelector<HTMLSpanElement>('#tarjeta .nombre')!;
    const logoMarca = document.querySelector<HTMLDivElement>('#logo-marca')!;
    const firma = document.querySelector<HTMLParagraphElement>('#tarjeta .firma p')!;
    const mesExpiracion = document.querySelector<HTMLSpanElement>('#tarjeta .mesExpiracion')!;
    const yearExpiracion = document.querySelector<HTMLSpanElement>('#tarjeta .yearExpiracion')!;
    const ccv = document.querySelector<HTMLSpanElement>('#tarjeta .ccv')!;

    // * Volteamos la tarjeta para mostrar el frente.
    const mostrarFrente = (): void => {
      if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
      }
    };

    // * Rotacion de la tarjeta
    tarjeta.addEventListener('click', () => {
      tarjeta.classList.toggle('active');
    });

    // * Boton de abrir formulario
    btnAbrirFormulario.addEventListener('click', () => {
      btnAbrirFormulario.classList.toggle('active');
      formulario.classList.toggle('active');
    });

    // * Select del mes generado dinámicamente
    for (let i = 1; i <= 12; i++) {
      const opcion = document.createElement('option');
      opcion.value = i.toString();
      opcion.innerText = i.toString();
      (formulario['selectMes'] as HTMLSelectElement).appendChild(opcion);
    }

    // * Select del año generado dinámicamente
    const yearActual = new Date().getFullYear();
    //for (let i = yearActual; i <= yearActual + 8; i++) {
      for (let i = 0; i <= 99; i++) {
      const opcion = document.createElement('option');
      opcion.value = i.toString();
      opcion.innerText = i.toString();
      (formulario['selectYear'] as HTMLSelectElement).appendChild(opcion);
    }

    // * Input número de tarjeta
    (formulario['inputNumero'] as HTMLInputElement).addEventListener('keyup', (e: KeyboardEvent) => {
      const input = e.target as HTMLInputElement;
      let valorInput = input.value;

      (formulario['inputNumero'] as HTMLInputElement).value = valorInput
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '')
        // Ponemos espacio cada cuatro números
        .replace(/([0-9]{4})/g, '$1 ')
        // Elimina el último espaciado
        .trim();

      numeroTarjeta.textContent = valorInput || '#### #### #### ####';

      // Limpiar logoMarca
      logoMarca.innerHTML = '';

      if (valorInput[0] === '4') {
        const imagen = document.createElement('img');
        imagen.src = '../../../assets/img/logos/visa.png';
        imagen.style.width = '80px'; // Establecer el ancho
        logoMarca.appendChild(imagen);
      } else if (valorInput[0] === '5') {
        const imagen = document.createElement('img');
        imagen.src = '../../../assets/img/logos/mastercard.png';
        imagen.style.width = '80px'; // Establecer el ancho
        logoMarca.appendChild(imagen);
      } else if (valorInput[0] === '6') {
        const imagen = document.createElement('img');
        imagen.src = 'i../../../assets/img/logos/Discover.png';
        imagen.style.width = '80px'; // Establecer el ancho
        logoMarca.appendChild(imagen);
      } else if (valorInput[0] === '3') {
        const imagen = document.createElement('img');
        imagen.src = '../../../assets/img/logos/AmericanExpress.png';
        imagen.style.width = '80px'; // Establecer el ancho
        logoMarca.appendChild(imagen);
      }

      // Voltear tarjeta para mostrar el frente
      mostrarFrente();
    });

    // * Input nombre de tarjeta
    (formulario['inputNombre'] as HTMLInputElement).addEventListener('keyup', (e: KeyboardEvent) => {
      const input = e.target as HTMLInputElement;
      let valorInput = input.value;

      (formulario['inputNombre'] as HTMLInputElement).value = valorInput.replace(/[0-9]/g, '');
      nombreTarjeta.textContent = valorInput;
      firma.textContent = valorInput;

      if (valorInput === '') {
        nombreTarjeta.textContent = '';
      }

      mostrarFrente();
    });

    // * Selección de mes
    (formulario['selectMes'] as HTMLSelectElement).addEventListener('change', (e: Event) => {
      const select = e.target as HTMLSelectElement;
      mesExpiracion.textContent = select.value;
      mostrarFrente();
    });

    // * Selección de año
    (formulario['selectYear'] as HTMLSelectElement).addEventListener('change', (e: Event) => {
      const select = e.target as HTMLSelectElement;
      //yearExpiracion.textContent = select.value.slice(2);
      yearExpiracion.textContent = select.value;
      mostrarFrente();
    });

    // * Código de seguridad CCV
    (formulario['inputCCV'] as HTMLInputElement).addEventListener('keyup', () => {
      if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.toggle('active');
      }

      (formulario['inputCCV'] as HTMLInputElement).value = (formulario['inputCCV'] as HTMLInputElement).value
        // Eliminar espacios
        .replace(/\s/g, '')
        // Eliminar letras
        .replace(/\D/g, '');

      ccv.textContent = (formulario['inputCCV'] as HTMLInputElement).value;
    });

  }

}
