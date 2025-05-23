import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Producto } from 'src/app/models/productos.model';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolgestorinventarioproductos',
  templateUrl: './rolgestorinventarioproductos.component.html',
  styleUrls: ['./rolgestorinventarioproductos.component.scss'],
  providers: [GestorUsuarioService, UsuarioService]

})
export class RolgestorinventarioproductosComponent implements OnInit {


  public token;
  public ProductoModelGet: Producto;
  public ProductoModelGetId: Producto;
  public idSucursal: string;
  public campoBusqueda: string = '';
  public buscar;
  
  constructor(
    public _activatedRoute: ActivatedRoute,

    private titleService: Title,
    private _gestorCategoriasServices: GestorUsuarioService,
    private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Inventario');
    this.token = this._usuarioService.obtenerToken();
    this.ProductoModelGetId = new Producto(
      '',
      '',
      '',
      '',
      0,
      0,
      0,
      '',
      '',
      '',
      [{
        idCategoria: '',
        nombreCategoria: '',
      }],
      [{
        idSucursal: '',
        nombreSucursal: '',
        direccionSucursal: '',
        telefonoSucursal: 0,
      }]
    );

  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      //this.idEmpresa = localStorage.getItem('idEmpresa'); // Asignar correctamente
      this.idSucursal = dataRuta.get('idSucursal'); // Asignar el idUsuario a la propiedad de la clase

      if (this.idSucursal) {
        this.getInventario(this.idSucursal); // Usar la propiedad
      }




      console.log(this.idSucursal);
    });
  }


  getInventario(idSucursal) {
    this.
    _gestorCategoriasServices.productosInventario(idSucursal, this.token)
      .subscribe(
        (response) => {
          this.ProductoModelGet = response.productos;
          console.log(this.ProductoModelGet);
        },
        (error) => {
          console.log(<any>error);
        }
      );
  }

  // eliminar producto
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
        this._gestorCategoriasServices.eliminarProductos(idProducto,this.token).subscribe(
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

  // ver producto por id
  getProductoId(idProducto){
    this._gestorCategoriasServices.obtenerProductoId(idProducto,this.token).subscribe(
      (response)=>{
        console.log(response);
        this.ProductoModelGetId = response.productos;
      },(error)=>{
        console.log(error)
      }
    )
  }

  // editar producto
  putProducto(){
    this._gestorCategoriasServices.editarProducto(this.ProductoModelGetId,this.token).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Producto editado correctamente',
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
          title: "Nombre existente",
          footer: '*Ingrese uno nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    )
  }

}
