import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Producto } from 'src/app/models/productos.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';
import { Carrito } from 'src/app/models/carrito.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolclienteproductos',
  templateUrl: './rolclienteproductos.component.html',
  styleUrls: ['./rolclienteproductos.component.scss'],
  providers: [UsuarioService, ClienteUsuarioService]

})
export class RolclienteproductosComponent implements OnInit {

  public token;
  public ProductosModelGet: Producto;
  public ProductosModelGetId: Producto;
  public CarritoModelPost: Carrito;
  public campoBusqueda: string = 'nombreProducto';
  public buscar;
  clasificacion = [
    { tipo: 'Pequeño' },
    { tipo: 'Mediano' },
    { tipo: 'Grande' },
  ];

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    // llamando a los servicios
    private _clienteUsuarioService: ClienteUsuarioService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol cliente productos');
    this.token = this._usuarioService.obtenerToken();

    this.CarritoModelPost = new Carrito(
      "",
      "",
      [{
        idProducto: "",
        nombreProducto: "",
        marca: "",
        imagen: "",
        cantidad: 0,
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
      0
    );

    this.ProductosModelGetId = new Producto("", "", "", "", 0, 0, 0, "", "", "",
      [{
        idCategoria: "",
        nombreCategoria: "",
      }],

      [{
        idSucursal: "",
        nombreSucursal: "",
        direccionSucursal: "",
        telefonoSucursal: 0,
      }]

    );


  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      console.log(dataRuta.get('idSucursal'));

      this.getProductosPorSucursal(dataRuta.get('idSucursal'))
      // this.getProductosSucursales();

    })
  }


  getProductosPorSucursal(idSucursal) {
    this.
      _clienteUsuarioService.obtenerProductosPorIdSucursal(idSucursal, this.token)
      .subscribe(
        (response) => {
          this.ProductosModelGet = response.productos;
          console.log(this.ProductosModelGet);
        },
        (error) => {
          console.log(<any>error);
        }
      );
  }


  getProductoid(idProducto) {
    this._clienteUsuarioService.obtenerProductoid(idProducto, this.token).subscribe(
      (response) => {
        console.log(response);
        this.ProductosModelGetId = response.productos;

      },
      (error) => {
        console.log(error);
      }
    );
  }


  agregarAlCarrito(event: Event, idProducto: String, cantidad: Number) {
    event.preventDefault(); // Evita el envío del formulario
    this.putCarrito(idProducto, cantidad); // Llama a la función existente
}


putCarrito(idProducto: String, cantidad: Number) {
  this._clienteUsuarioService.putProductoCarrito(
      idProducto,
      cantidad,
      this.token
  ).subscribe(
      (response) => {
          Swal.fire({
              icon: 'success',
              title: 'Producto agregado correctamente',
              showConfirmButton: false,
              timer: 1500 // Alerta se mostrará durante 1.5 segundos
          }).then(() => {
              window.location.reload(); // Recargar la página después de que la alerta se cierra
          });
      },
      (error) => {
          // Captura y muestra el mensaje de error
          const errorMessage = error.error?.message || 'Sobrepasa el stock o está agregando un producto de otra sucursal';
          Swal.fire({
              icon: 'error',
              title: 'Error al agregar el producto',
              text: errorMessage,
              showConfirmButton: true
          });
      }
  );
}



validarCantidad(event: Event) {
  const input = event.target as HTMLInputElement;
  const valor = Number(input.value);
  if (valor < 0) {
      input.value = '0'; // Restablece el valor a 0 si es menor que 0
      this.CarritoModelPost.compras[0].cantidad = 0; // Asegúrate de actualizar el modelo
  }
}

}
