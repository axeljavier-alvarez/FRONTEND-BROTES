import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { Planta } from 'src/app/models/planta.model';
import { Categoria } from 'src/app/models/categoria.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-rolgestorplantas',
  templateUrl: './rolgestorplantas.component.html',
  styleUrls: ['./rolgestorplantas.component.scss'],
    providers: [UsuarioService, GestorUsuarioService]

})
export class RolgestorplantasComponent implements OnInit {

   public token;
   public PlantasModelGet: Planta;
    public campoBusqueda: string = 'nombre';
    public buscar;
    public idSucursal;
    public PlantasModelGetId: Planta;
    public CategoriaModelPost: Categoria;
   selectedImage: File | null = null;
   previewUrl: string | ArrayBuffer | null = null;


  constructor(
    public _activatedRoute: ActivatedRoute,
            private titleService: Title,
            private _gestorUsuarioService: GestorUsuarioService,
            private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol empleado plantas');
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
   }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idSucursal = dataRuta.get('idSucursal'); // Asignar el idCategoria
      console.log(dataRuta.get('idSucursal'));
      this.getPlantasPorSucursal(dataRuta.get('idSucursal'));
      // this.getProductosSucursales();

    })
  }

  /*  ver plantas por sucursal */
  getPlantasPorSucursal(idSucursal) {
    this.
      _gestorUsuarioService.verPlantasPorSucursal(idSucursal, this.token)
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


  /* ver plantas por id */
  getPlantaId(idPlanta) {
  this._gestorUsuarioService.obtenerPlantaPorId(idPlanta, this.token).subscribe(
    (response) => {
      this.PlantasModelGetId = response.plantas;
      console.log(this.PlantasModelGetId);

    },
    (error) => {
      console.log(error);
    }
  );
}



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
      this._gestorUsuarioService.modificarPlanta(
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

nuevoEditarEstado() {
  Swal.fire({
    title: '¿Está seguro?',
    text: '¿Desea editar sus datos?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0047FF',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, editar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this._gestorUsuarioService.nuevoEditarEstado(this.PlantasModelGetId, this.token).subscribe(
        (response) => {
          console.log(response);
          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Planta editada correctamente',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            window.location.reload();  // Aquí refresca la página
          });
        },
        (error) => {
          console.log(error);
          const mensajeError = error.error?.mensaje || 'Error inesperado';
          Swal.fire({
            icon: 'error',
            title: 'Error al editar',
            text: mensajeError,
            showConfirmButton: false,
            timer: 2500
          });
        }
      );
    }
  });
}





}
