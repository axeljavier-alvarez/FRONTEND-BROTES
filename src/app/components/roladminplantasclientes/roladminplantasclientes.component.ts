import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Planta } from 'src/app/models/planta.model';
import { Usuario } from 'src/app/models/usuarios.model';

import { AdminUsuariosService } from 'src/app/services/admin-usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roladminplantasclientes',
  templateUrl: './roladminplantasclientes.component.html',
  styleUrls: ['./roladminplantasclientes.component.scss'],
  providers: [AdminUsuariosService, UsuarioService]
})
export class RoladminplantasclientesComponent implements OnInit {

  public token;
  public PlantasModelGet: Planta;
  public UsuariosModelGet: Usuario;
    public PlantasModelGetId: Planta;

   public idUsuario;
   public campoBusqueda: string = 'nombre';
   public buscar;
  constructor(
    public _activatedRoute: ActivatedRoute,
            private titleService: Title,
            private _adminUsuarioService: AdminUsuariosService,
            private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Plantas de clientes');
        this.token = this._usuarioService.obtenerToken();

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
      this.idUsuario = dataRuta.get('idUsuario'); // Asignar el idCategoria
      console.log(dataRuta.get('idUsuario'));
      this.getPlantasPorCliente(dataRuta.get('idUsuario'));
      // this.obtenerCategorias();
      // this.getProductosSucursales();

    })
  }

  getPlantasPorCliente(idUsuario) {
    this.
      _adminUsuarioService.verPlantasPorCliente(idUsuario, this.token)
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


  getPlantaId(idPlanta) {
  this._adminUsuarioService.obtenerPlantaPorId(idPlanta, this.token).subscribe(
    (response) => {
      this.PlantasModelGetId = response.plantas;
      console.log(this.PlantasModelGetId);

    },
    (error) => {
      console.log(error);
    }
  );
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
      this._adminUsuarioService.nuevoEditarEstado(this.PlantasModelGetId, this.token).subscribe(
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
