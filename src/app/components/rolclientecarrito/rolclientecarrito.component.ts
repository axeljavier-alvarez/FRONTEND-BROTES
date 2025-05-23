import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Carrito } from 'src/app/models/carrito.model';
import { Producto } from 'src/app/models/productos.model';

import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';
import { CarritoEditar } from 'src/app/models/carritoeditar.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolclientecarrito',
  templateUrl: './rolclientecarrito.component.html',
  styleUrls: ['./rolclientecarrito.component.scss'],
  providers: [UsuarioService, ClienteUsuarioService]
})
export class RolclientecarritoComponent implements OnInit {
  public token;

  public CarritosModelGet: Carrito;

  public ProductoModelGetId: Producto;

  public CarritoModelGetId: Carrito;

  public CarritoEditarModelGetId: CarritoEditar;

  constructor(

    private titleService: Title,


    /* instanciando el servicio */
    private _usuarioService: UsuarioService,
    private _clienteUsuarioService: ClienteUsuarioService,
  ) {
    this.titleService.setTitle('Carrito');
    this.token = this._usuarioService.obtenerToken();

    this.CarritoEditarModelGetId = new CarritoEditar(
      "",
      0,
      0,
      ""

    )

    this.CarritoModelGetId = new Carrito(
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

    this.ProductoModelGetId = new Producto("", "", "", "", 0, 0, 0, "", "", "",
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


    this.getClienteCarrito();
  }


  /* FUNCIONES */
  getClienteCarrito() {
    this._clienteUsuarioService.verCarritoCliente(this.token).subscribe(
      (response) => {
        this.CarritosModelGet = response.carritos;
        console.log(this.CarritosModelGet);
      }, (error) => {
        console.log(<any>error);
      }
    )
  }



  getProductoid(idProducto) {
    console.log("ID del producto:", idProducto);  // Verifica el ID aquí
    this._clienteUsuarioService.verProductoCarritoPorId(idProducto, this.token).subscribe(
      (response) => {
        console.log(response);
        this.CarritoEditarModelGetId = response.producto;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  putStockCarrito() {
    this._clienteUsuarioService.actualizarStockProducto(this.CarritoEditarModelGetId, this.token).subscribe(
      (response) => {
        console.log(response);
        this.getClienteCarrito();
        Swal.fire({
          icon: 'success',
          title: 'Éxito!',
          text: 'Cantidad actualizada correctamente',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          location.reload(); // Refresca la página después de que se cierra el mensaje
        });
      },
      (error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          text: error.error.mensaje || 'Datos incompletos. Por favor, revisa la información.',
          footer: '*Ingrese datos de nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    );
  }


  deleteProducto(idProducto){
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
        this._clienteUsuarioService.eliminarProductoCarrito(idProducto,this.token).subscribe(
          (response) => {
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Eliminado',
              text: 'El producto ha sido eliminado exitosamente.',
              showConfirmButton: false,
              timer: 1500,
              willClose: () => {
                window.location.reload();
              }
            });
          },(error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo eliminar el producto.',
              showConfirmButton: false,
              timer: 2500
            });
          }
        );
      }
    });
  }

}
