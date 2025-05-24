import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';
import { Planta } from 'src/app/models/planta.model';
import {Categoria} from 'src/app/models/categoria.model';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-rolclienteplantas',
  templateUrl: './rolclienteplantas.component.html',
  styleUrls: ['./rolclienteplantas.component.scss'],
  providers: [UsuarioService, ClienteUsuarioService]
})
export class RolclienteplantasComponent implements OnInit {

   public token;
   public PlantasModelGet: Planta;
   public PlantasModelPost: Planta;
   public CategoriaModelGet: Categoria[] = [];
   public CategoriaModelPost: Categoria;
   public PlantasModelGetId: Planta;
   selectedImage: File | null = null;
   previewUrl: string | ArrayBuffer | null = null;

   public campoBusqueda: string = 'nombre';
   public buscar;
   public idSucursal;
   public listaCategorias: Categoria[] = [];


  constructor(
        public _activatedRoute: ActivatedRoute,
        private titleService: Title,
        private _clienteUsuarioService: ClienteUsuarioService,
        private _usuarioService: UsuarioService
      ) {
        this.titleService.setTitle('Rol cliente plantas');
        this.token = this._usuarioService.obtenerToken();



        this.CategoriaModelPost = new Categoria("", "", "", "", "");


        this.PlantasModelGetId = new Planta(
            '',
            '',
            '',
            null,
            '',
            '',
            [{
              idCategoria: '',
              nombreCategoria: '',
              descripcionCategoria: ''
            }],
            [{
              idUsuario: '',
              nombre: '',
              apellido: '',
              email: '',
               telefono: '',
           direccion: '',
        departamento: '',
        municipio: '',
              rol: ''
            }],

            [{
            idHistorial: '',
            clienteId: '',
            fecha: null,
            tipo: '',
            mensaje: '',
            humedad_actual: 0,
            metodo: '',
            precio: 0
            }],

            [{
            idSucursal: '',
            nombreSucursal: '',
            direccionSucursal: '',
            telefonoSucursal: 0,
            departamento: '',
            municipio: ''
    }],



 );

        this.PlantasModelPost = new Planta(
            '',
            '',
            '',
            null,
            '',
            '',
            [{
              idCategoria: '',
              nombreCategoria: '',
              descripcionCategoria: ''
            }],
            [{
              idUsuario: '',
              nombre: '',
              apellido: '',
              email: '',
               telefono: '',
           direccion: '',
        departamento: '',
        municipio: '',
              rol: ''
            }],

            [{
            idHistorial: '',
            clienteId: '',
            fecha: null,
            tipo: '',
            mensaje: '',
            humedad_actual: 0,
            metodo: '',
            precio: 0
            }],

            [{
            idSucursal: '',
            nombreSucursal: '',
            direccionSucursal: '',
            telefonoSucursal: 0,
            departamento: '',
            municipio: ''
    }],



 );

        }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idSucursal = dataRuta.get('idSucursal'); // Asignar el idCategoria
      console.log(dataRuta.get('idSucursal'));
      this.getPlantasPorSucursal(dataRuta.get('idSucursal'));
      this.obtenerCategorias();
      // this.getProductosSucursales();

    })
  }

  /* obtener categorias */
  obtenerCategorias() {
  this._clienteUsuarioService.obtenerCategoriasCliente(this.token).subscribe(
    (response) => {
      this.CategoriaModelGet = response.categorias;
      this.listaCategorias = response.categorias;
      console.log(this.listaCategorias);
    },
    (error) => {
      console.log(<any>error);
    }
  );
}


  /*  ver plantas por sucursal */
  getPlantasPorSucursal(idSucursal) {
    this.
      _clienteUsuarioService.obtenerPlantasPorIdSucursal(idSucursal, this.token)
      .subscribe(
        (response) => {
          this.PlantasModelGet = response.plantas;
          console.log(this.PlantasModelGet);
        },
        (error) => {
          console.log(<any>error);
        }
      );
  }

// Método para manejar la selección de la imagen
onImageSelected(event: any) {
  const file: File = event.target.files[0];
  if (file) {
    this.selectedImage = file;

    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result; // Esto es lo que se muestra como vista previa
    };
    reader.readAsDataURL(file);
  }
}


postPlanta(idSucursal: string) {
  this._clienteUsuarioService
    .agregarNuevaPlanta(
      this.PlantasModelPost,
      this.CategoriaModelPost,
      this.token,
      idSucursal,
      this.selectedImage

    )
    .subscribe({
      next: (response: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Éxito!',
          text: 'Producto agregado exitosamente',
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            window.location.reload();
          }
        });
      },
      error: (error) => {
      console.error(error);

      Swal.fire({
        icon: 'error',
        title: 'Error al agregar la planta',
        text: error.error?.mensaje || 'Error inesperado',
        showConfirmButton: false,
        timer: 3000
      });
    }

    });
}


/* eliminar planta */

deletePlanta(idPlanta) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¡No podrás revertir esto!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this._clienteUsuarioService.eliminarPlanta(idPlanta, this.token).subscribe(
        (response) => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: 'Eliminado',
            text: 'La planta ha sido eliminada exitosamente.',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
              window.location.reload();
            }
          });
        },
        (error) => {
          console.error(error);

          let mensaje = 'No se pudo eliminar la planta.';

          // Si el backend devuelve un mensaje específico, lo mostramos
          if (error?.error?.mensaje === "Solo se pueden eliminar plantas con estado 'pendiente'.") {
            mensaje = "Solo puedes eliminar plantas que están en estado 'pendiente'.";
          } else if (error?.error?.mensaje) {
            mensaje = error.error.mensaje;
          }

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: mensaje,
            showConfirmButton: false,
            timer: 2500
          });
        }
      );
    }
  });
}

getPlantaId(idPlanta) {
  this._clienteUsuarioService.obtenerPlantaPorId(idPlanta, this.token).subscribe(
    (response) => {
      this.PlantasModelGetId = response.plantas;

      // 🟢 Asignar la categoría actual para que se seleccione en el <select>
      if (this.PlantasModelGetId.datosCategoria?.length > 0) {
        this.CategoriaModelPost.nombreCategoria = this.PlantasModelGetId.datosCategoria[0].nombreCategoria;
      }

    },
    (error) => {
      console.log(error);
    }
  );
}

  // Método para manejar la selección de la imagen

putPlanta() {
  if (!this.PlantasModelGetId || !this.CategoriaModelPost) {
    Swal.fire({
      icon: 'error',
      title: 'Datos incompletos',
      text: 'Por favor, complete todos los campos requeridos.',
      showConfirmButton: true
    });
    return;
  }

  Swal.fire({
  title: '¿Está seguro?',
  text: '¿Desea editar sus datos?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#0047FF',  // Cambiado a azul
  cancelButtonColor: '#d33',
  confirmButtonText: 'Sí, editar',
  cancelButtonText: 'Cancelar'
})
.then((result) => {
    if (result.isConfirmed) {
      this._clienteUsuarioService.modificarPlanta(
        this.PlantasModelGetId,             // modeloPlanta
        this.CategoriaModelPost,            // modeloCategoria
        this.token,                          // token
        this.selectedImage                  // imagen
      ).subscribe(
        (response) => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Planta editada correctamente',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
              window.location.reload(); // Si deseas refrescar la vista
            }
          });
        },
        (error) => {
          console.log(<any>error);
          Swal.fire({
            icon: 'error',
            title: 'Error al editar',
            text: error.error?.mensaje || 'Error inesperado',
            showConfirmButton: false,
            timer: 2500
          });
        }
      );
    }
  });
}






}
