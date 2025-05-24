import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { Planta } from 'src/app/models/planta.model';
import { Historial } from 'src/app/models/historial.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plantahistorialadmin',
  templateUrl: './plantahistorialadmin.component.html',
  styleUrls: ['./plantahistorialadmin.component.scss'],
      providers: [UsuarioService, GestorUsuarioService]

})
export class PlantahistorialadminComponent implements OnInit {

   public token;
    public HistorialModelGet: Historial[] = [];
    public HistorialModelPost: Historial;
   public HistorialModelGetId: Historial;
   public idPlanta;
   public idHistorial;

  constructor(
      public _activatedRoute: ActivatedRoute,
            private titleService: Title,
            private _gestorUsuarioService: GestorUsuarioService,
            private _usuarioService: UsuarioService

  ) {
     this.titleService.setTitle('Historial plantas');
        this.token = this._usuarioService.obtenerToken();

        this.HistorialModelPost = new Historial(
          "",
          "",
          null,
          "",
          "",
          0,
          "",
          0

        );

        this.HistorialModelGetId = new Historial(
          "",
          "",
          null,
          "",
          "",
          0,
          "",
          0

        );

   }

 ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idPlanta = dataRuta.get('idPlanta');
      console.log(dataRuta.get('idPlanta'));
      this.getHistorialPorPlanta(dataRuta.get('idPlanta'));
      // this.getProductosSucursales();

    })
  }

  getHistorialPorPlanta(idPlanta) {
    this.
      _gestorUsuarioService.obtenerHistorialPorIdPlanta(idPlanta, this.token)
      .subscribe(
        (response) => {
          this.HistorialModelGet = response.historial;
          console.log(this.HistorialModelGet);
        },
        (error) => {
          console.log(<any>error);
        }
      );
  }

  postAgregarHistorial() {
  console.log(this.HistorialModelPost); // Verifica los datos del historial

  this._gestorUsuarioService.agregarHistorial(
    this.HistorialModelPost,
    this.token,
    this.idPlanta
  ).subscribe({
    next: (response: any) => {
      Swal.fire({
        icon: 'success',
        title: 'Éxito!',
        text: 'Historial agregado exitosamente',
        showConfirmButton: false,
        timer: 1500,
      });
      // Actualiza la lista para reflejar los cambios
      this.getHistorialPorPlanta(this.idPlanta);
    },
    error: (error) => {
      console.log(<any>error);
      Swal.fire({
        icon: 'error',
        title: "Error al agregar el historial",
        text: error.error.mensaje || 'Datos incompletos. Por favor, revisa la información.',
        footer: '*Ingrese los datos de nuevo*',
        showConfirmButton: false,
        timer: 2500
      });
    }
  });
}
            /* editar id */
            /* editar id */
mensajeError: string = '';

getHistorialId(idHistorial: string) {
  function esIdValido(id: string): boolean {
    return /^[0-9a-fA-F]{24}$/.test(id);
  }

  if (!esIdValido(idHistorial)) {
    this.mensajeError = "ID inválido: " + idHistorial;
    return;
  }

  this._gestorUsuarioService.verHistorialPorId(idHistorial, this.token).subscribe(
    (response) => {
      this.HistorialModelGetId = response.historial;
      this.mensajeError = ''; // Limpiar mensaje si todo sale bien
      console.log(this.HistorialModelGetId);
    },
    (error) => {
      if (error.status === 404) {
        this.mensajeError = "Historial no encontrado para el ID: " + idHistorial;
      } else {
        this.mensajeError = "Error al obtener historial";
      }
    }
  );
}


verHistorialPorId(idPlanta) {
  this._gestorUsuarioService.verHistorialPorId(idPlanta, this.token).subscribe(
    (response) => {
      this.HistorialModelGetId = response.plantas;
      console.log(this.HistorialModelGetId);

    },
    (error) => {
      console.log(error);
    }
  );
}


editarHistorial() {
  if (!this.HistorialModelGetId?._id) {
    Swal.fire('Error', 'No se ha cargado correctamente el historial a editar.', 'error');
    return;
  }

  Swal.fire({
    title: '¿Está seguro?',
    text: '¿Desea editar el historial?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#0047FF',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, editar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this._gestorUsuarioService.editarHistorial(this.HistorialModelGetId, this.token).subscribe(
        (response) => {
          console.log(response);

          const index = this.HistorialModelGet.findIndex(h => h._id === this.HistorialModelGetId._id);
          if (index !== -1) {
            this.HistorialModelGet[index] = { ...this.HistorialModelGetId }; // se copia para reactivar el change detection
          }

          Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'Historial editado correctamente',
            showConfirmButton: false,
            timer: 1500
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




deleteHistorial(idHistorial: string) {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¡No podrás revertir esto!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      this._gestorUsuarioService.eliminarHistorial(idHistorial, this.token).subscribe(
        (response) => {
          console.log(response);
          // Actualiza el arreglo local filtrando el eliminado
          this.HistorialModelGet = this.HistorialModelGet.filter(h => h._id !== idHistorial);

          Swal.fire({
            icon: 'success',
            title: 'Eliminada',
            text: 'La caja ha sido eliminada exitosamente.',
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error) => {
          console.log(<any>error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo eliminar la caja.',
            showConfirmButton: false,
            timer: 2500
          });
        }
      );
    }
  });
}










}
