import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdminUsuariosService} from 'src/app/services/admin-usuarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuarios.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-editarroladmin',
  templateUrl: './editarroladmin.component.html',
  styleUrls: ['./editarroladmin.component.scss'],
  providers: [AdminUsuariosService, UsuarioService],

})

export class EditarroladminComponent implements OnInit {
  public token;
  public usuariosModelGetId: Usuario;
  selectedImage: File | null = null; // Propiedad para la imagen seleccionada
  previewUrl: string | ArrayBuffer | null = null; // Propiedad para la vista previa de la imagen

  constructor(
    private titleService: Title,
    public _usuariosService: UsuarioService,
    private _adminUsuariosService: AdminUsuariosService,
    private router: Router
  ) {
    this.titleService.setTitle('Editar perfil administrador');
    this.usuariosModelGetId = new Usuario("", "", "", "", "", "", 0, "", "", "", "", "", "");
    this.token = this._usuariosService.obtenerToken();
  }

  ngOnInit(): void {
    this.getUsuariosId(this._usuariosService.obtenerIdentidad()._id);
  }

  getUsuariosId(idUsuario) {
    this._adminUsuariosService.obtenerRolGestorId(idUsuario, this._usuariosService.obtenerToken()).subscribe(
      (response) => {
        this.usuariosModelGetId = response.usuario;
        console.log(this.usuariosModelGetId);
      }
    );
  }

  // Método para manejar la selección de la imagen
  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedImage = file; // Guarda la imagen seleccionada

      // Crear una URL de vista previa
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewUrl = e.target.result; // Guarda la URL de la imagen
      };
      reader.readAsDataURL(file); // Lee el archivo como una URL de datos
    }
  }

  // Método para modificar el usuario
  putUsuarios() {
    if (!this.usuariosModelGetId) {
      Swal.fire({
        icon: 'error',
        title: 'Datos incompletos',
        text: 'Por favor, complete todos los campos requeridos.',
        showConfirmButton: true
      });
      return; // Salir si no hay datos completos
    }

    // Mostrar la alerta de confirmación
    Swal.fire({
      title: '¿Está seguro?',
      text: '¿Desea editar sus datos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#eb984e',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, proceder con la modificación
        this._adminUsuariosService.modificarPerfilAdmin(
          this.usuariosModelGetId,
          this._usuariosService.obtenerToken(),
          this.selectedImage // Asegúrate de pasar la imagen
        ).subscribe(
          (response) => {
            console.log(response);
            this.router.navigate(['/admin/vistaroladmin']);
            Swal.fire({
              icon: 'success',
              title: 'Éxito!',
              text: 'Usuario editado correctamente',
              showConfirmButton: false,
              timer: 1500
            });
          },
          (error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: "Email existente",
              footer: '*Ingrese uno nuevo*',
              showConfirmButton: false,
              timer: 2500
            });
          }
        );
      }
    });
  }
}
