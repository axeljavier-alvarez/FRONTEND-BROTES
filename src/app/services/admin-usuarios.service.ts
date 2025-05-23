import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuarios.model';
import { Empresa } from '../models/empresa.model';
import { Sucursal } from '../models/sucursal.model';
import { Categoria } from '../models/categoria.model';
import { Caja } from '../models/caja.model';

@Injectable({
  providedIn: 'root'
})
export class AdminUsuariosService {

  public url: String = 'http://localhost:3000/api';

  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad;
  public token;
  // public idEmpresa;

  constructor(public _http: HttpClient) { }






  /*--------------- ADMINISTRACION DEL ROL GESTOR---------------------- */

  /*No 1. Ver a los usuarios con rol Gestor*/
  getUsuariosRolGestor(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getUsuarioRolGestor', { headers: headersToken });
  }



  /* agregarUsuarioRolGestor(modeloUsuario: Usuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token)

    let parametros = JSON.stringify(modeloUsuario);

    return this._http.post(this.url + '/agregarRolGestor', parametros, { headers: headersToken });

  } */


    agregarUsuarioRolGestor(
      modeloUsuario: Usuario,
      modeloSucursal: Sucursal, // Asegúrate de que este modelo está bien definido
      token: string,
      imagen: File
    ): Observable<any> {
      const formData = new FormData();
      formData.append('nombre', String(modeloUsuario.nombre || ''));
      formData.append('apellido', String(modeloUsuario.apellido || ''));
      formData.append('email', String(modeloUsuario.email || ''));
      formData.append('password', String(modeloUsuario.password || ''));
      formData.append('telefono', modeloUsuario.telefono != null ? modeloUsuario.telefono.toString() : '0');
      formData.append('direccion', String(modeloUsuario.direccion || ''));
      formData.append('departamento', String(modeloUsuario.departamento || ''));
      formData.append('municipio', String(modeloUsuario.municipio || ''));
      formData.append('nombreSucursal', String(modeloSucursal.nombreSucursal || '')); // Uso correcto del modeloSucursal

      if (imagen) {
        formData.append('imagen', imagen, imagen.name); // Agregar la imagen al FormData
      }

      const headersToken = new HttpHeaders().set('Authorization', token);

      return this._http.post(`${this.url}/agregarGestor`, formData, { headers: headersToken });
    }


  eliminarUsuarioRolGestor(idUsuario, token) {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarRolGestor/' + idUsuario, { headers: headersToken });

  }

  obtenerRolGestorId(idUsuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/getUsuarioRolGestor/' + idUsuario, { headers: headersToken });

  }


  editarRolGestor(modeloUsuario: Usuario, token): Observable<any> {

    let parametros = JSON.stringify(modeloUsuario);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarRolGestor/' + modeloUsuario._id, parametros, { headers: headersToken })

  }


  /*--------------- ADMINISTRACION DEL ROL FACTURADOR---------------------- */
//Ver usuarios con el rol Facturador
getUsuariosRolFacturador(token): Observable<any> {
  let headersToken = this.headersVariable.set('Authorization', token);
  return this._http.get(this.url + '/getUsuarioSRolFacturador', { headers: headersToken });
}

/*agregarUsuarioRolFacturador(modeloUsuario: Usuario, token): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token)

  let parametros = JSON.stringify(modeloUsuario);

  return this._http.post(this.url + '/agregarRolFacturador', parametros, { headers: headersToken });

}*/
agregarUsuarioRolFacturador(

  modeloUsuario: Usuario,
  modeloSucursal: Sucursal, // Asegúrate de que este modelo está bien definido
  token: string,
  imagen: File
): Observable<any> {
  const formData = new FormData();
  formData.append('nombre', String(modeloUsuario.nombre || ''));
  formData.append('apellido', String(modeloUsuario.apellido || ''));
  formData.append('email', String(modeloUsuario.email || ''));
  formData.append('password', String(modeloUsuario.password || ''));
  formData.append('telefono', modeloUsuario.telefono != null ? modeloUsuario.telefono.toString() : '0');
  formData.append('direccion', String(modeloUsuario.direccion || ''));
  formData.append('departamento', String(modeloUsuario.departamento || ''));
  formData.append('municipio', String(modeloUsuario.municipio || ''));
  formData.append('nombreSucursal', String(modeloSucursal.nombreSucursal || '')); // Uso correcto del modeloSucursal

  if (imagen) {
    formData.append('imagen', imagen, imagen.name); // Agregar la imagen al FormData
  }

  const headersToken = new HttpHeaders().set('Authorization', token);

  return this._http.post(`${this.url}/agregarRolFacturador`, formData, { headers: headersToken });
}

eliminarUsuarioRolFacturador(idUsuario, token) {
  let headersToken = this.headersVariable.set('Authorization', token);
  return this._http.delete(this.url + '/eliminarRolFacturador/' + idUsuario, { headers: headersToken });

}

obtenerRolFacturadorId(idUsuario, token): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token);

  return this._http.get(this.url + '/getUsuarioRolFacturador/' + idUsuario, { headers: headersToken });

}

editarRolFacturador(modeloUsuario: Usuario, token): Observable<any> {

  let parametros = JSON.stringify(modeloUsuario);

  let headersToken = this.headersVariable.set('Authorization', token);

  return this._http.put(this.url + '/editarRolFacturador/' + modeloUsuario._id, parametros, { headers: headersToken })

}

  /*--------------- ADMINISTRACION DEL ROL CLIENTE---------------------- */

  getUsuariosRolCliente(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getUsuarioSRolCliente', { headers: headersToken });
  }

  agregarUsuarioRolCliente(modeloUsuario: Usuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token)

    let parametros = JSON.stringify(modeloUsuario);

    return this._http.post(this.url + '/agregarRolCliente', parametros, { headers: headersToken });

  }

  eliminarUsuarioRolCliente(idUsuario, token) {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarRolCliente/' + idUsuario, { headers: headersToken });

  }

  obtenerRolClienteId(idUsuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/getUsuarioRolCliente/' + idUsuario, { headers: headersToken });

  }

  editarRolCliente(modeloUsuario: Usuario, token): Observable<any> {

    let parametros = JSON.stringify(modeloUsuario);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarRolCliente/' + modeloUsuario._id, parametros, { headers: headersToken })

  }

  /* --------------- ADMINISTRACION DE EMPRESAS ----------------- */
  /*No 1. Ver a las empresas con rol admin*/
  getEmpresasRolAdmin(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getEmpresaRolAdmin', { headers: headersToken });
  }


  /* agregar empresa rol admin*/
  agregarEmpresasRolAdmin(modeloEmpresa: Empresa, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token)

    let parametros = JSON.stringify(modeloEmpresa);

    return this._http.post(this.url + '/agregarEmpresaRolAdmin', parametros, { headers: headersToken });

  }


  /* Eliminar empresa*/
  eliminarEmpresasRolAdmin(idEmpresa, token) {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarEmpresaRolAdmin/' + idEmpresa, { headers: headersToken });

  }

  /* ver empresas por id */

  obtenerEmpresaRolId(idEmpresa, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/getEmpresaIdRolAdmin/' + idEmpresa, { headers: headersToken });

  }


  /* editar las empresas */
  editarEmpresaRolAdmin(modeloEmpresa: Empresa, token): Observable<any> {

    let parametros = JSON.stringify(modeloEmpresa);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarEmpresaRolAdmin/' + modeloEmpresa._id, parametros, { headers: headersToken });

  }

  /* --------------- ADMINISTRACION DE SUCURSALES ----------------- */
  getSucursalesRolAdmin(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verSucursalRolAdmin', { headers: headersToken });
  }


//AGREGAR SUCURSAL POR ID EMRPRESA
  obtenerSucursalPorIdEmpresa(idEmpresa, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verSucursalPorEmpresa/' + idEmpresa,
      { headers: headersToken }
    );
  }


  /* Eliminar sucursal*/
  eliminarSucursalesRolAdmin(idSucursal, token) {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarSucursalRolAdmin/' + idSucursal, { headers: headersToken });

  }


  obtenerSucursalEmpresaId(idSucursal, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/verSucursalPorEmpresa/' + idSucursal, { headers: headersToken });

  }

  /* ver empresas por id */

  obtenerSucursalRolId(idSucursal, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/verSucursalIDRolAdmin/' + idSucursal, { headers: headersToken });

  }

  /* Editar sucursal */
  editarSucursalRolAdmin(modeloSucursal: Sucursal, token): Observable<any> {

    let parametros = JSON.stringify(modeloSucursal);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarSucursalRolAdmin/' + modeloSucursal._id, parametros, { headers: headersToken });

  }

//VER SUCURSALES POR ID DE LA EMPRESA

  ObtenerSucursalesIdEmpresa(idEmpresa, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url+ '/verSucursalPorEmpresa/' + idEmpresa, { headers: headersToken})
  }

  /* Agregar sucursal */
  //cuando se necesita un id
  agregarSucursalesIdEmpresa(modeloSucursal: Sucursal, token:string,idEmpresa:string): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloSucursal);

    return this._http.post(this.url + '/agregarSucursal/' + idEmpresa, parametros, { headers: headersToken });

  }


  /*AgregarNuevaSucursal(modeloSucursal: Sucursal, token: string, idEmpresa: string, idUsuario: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloSucursal);

    // Puedes agregar el idUsuario a la URL si es necesario
    return this._http.post(this.url + '/agregarSucursalPor/' + idEmpresa + '/' + idUsuario, parametros, { headers: headersToken });
} */



  /* ----- SUCURSALES ------------ */
  ObtenerSucursalesIdGestor(idUsuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url+ '/verSucursalPorGestor/' + idUsuario, { headers: headersToken})
  }

  /* agregar nueva sucursal por el id_empresa y id_usuario */
  AgregarNuevaSucursal(modeloSucursal: Sucursal, token: string, idEmpresa: string, idUsuario: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloSucursal);

    // Puedes agregar el idUsuario a la URL si es necesario
    return this._http.post(this.url + '/agregarSucursalPor/' + idEmpresa + '/' + idUsuario, parametros, { headers: headersToken });
}

  /* --------------- ADMINISTRACION DE CATEGORIAS ----------------- */

  //VER CATEGORIAS
  obtenerCategoriasRolAdmin(token): Observable <any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/getCategoriaAdmin', { headers: headersToken });
  }

  //AGREGAR CATEGORIAS
  agregarCategoriaRolAdmin(modeloCategoria: Categoria, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    let parametros = JSON.stringify(modeloCategoria);
    return this._http.post(this.url + '/agregarCategoriaAdmin', parametros, { headers: headersToken });
  }


 // AGREGAR CATEGORIA CON IMAGEN

 agregarCategoriaConImagen(

  modeloCategoria: Categoria,
  token: string,
  imagen: File
 ): Observable<any> {

  const formData = new FormData();
  formData.append('nombreCategoria', String(modeloCategoria.nombreCategoria || ''));
  formData.append('descripcionCategoria', String(modeloCategoria.descripcionCategoria || ''));

   // Asegúrate de que la imagen no sea nula antes de agregarla
   if (imagen) {
    formData.append('imagen', imagen, imagen.name); // Agregar la imagen al FormData
  }

  const headersToken = new HttpHeaders().set('Authorization', token);

  return this._http.post(
    `${this.url}/agregarCategoriaAdmin`, formData, { headers: headersToken }
  );
 }



  //ELIMINAR CATEGORIAS
  eliminarCategoriaRolAdmin(idCategoria,token){
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.delete(this.url + '/eliminarCategoriaAdmin/' + idCategoria, { headers: headersToken });
  }

  //OBTENER CATEGORIA POR ID
  obtenerCategoriaIdRolAdmin(idCategoria,token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/getCategoriasIDRolAdmin/' + idCategoria, { headers: headersToken });
  }

  //EDITAR CATEGORIA
  editarCategoriaRolAdmin(modeloCategoria: Categoria, token): Observable<any> {
    let parametros = JSON.stringify(modeloCategoria);
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.put(this.url + '/editarCategoriaAdmin/' + modeloCategoria._id, parametros, { headers: headersToken });
  }

  /*--------------- ADMINISTRACION DEL ROL REPARTIDOR ---------------------- */

  obtenerUsuariosRolRepartidor(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/getUsuarioRolRepartidor', { headers: headersToken });
  }

  /*agregarUsuarioRolRepartidor(modeloUsuario: Usuario, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    let parametros = JSON.stringify(modeloUsuario);
    return this._http.post(this.url + '/agregarRolRepartidor', parametros, { headers: headersToken });
  }*/
 agregarUsuarioRolRepartidor(
  modeloUsuario: Usuario,
  modeloSucursal: Sucursal, // Asegúrate de que este modelo está bien definido
  token: string,
  imagen: File
): Observable<any> {
  const formData = new FormData();
  formData.append('nombre', String(modeloUsuario.nombre || ''));
  formData.append('apellido', String(modeloUsuario.apellido || ''));
  formData.append('email', String(modeloUsuario.email || ''));
  formData.append('password', String(modeloUsuario.password || ''));
  formData.append('telefono', modeloUsuario.telefono != null ? modeloUsuario.telefono.toString() : '0');
  formData.append('direccion', String(modeloUsuario.direccion || ''));
  formData.append('departamento', String(modeloUsuario.departamento || ''));
  formData.append('municipio', String(modeloUsuario.municipio || ''));
  formData.append('nombreSucursal', String(modeloSucursal.nombreSucursal || '')); // Uso correcto del modeloSucursal

  if (imagen) {
    formData.append('imagen', imagen, imagen.name); // Agregar la imagen al FormData
  }

  const headersToken = new HttpHeaders().set('Authorization', token);

  return this._http.post(`${this.url}/agregarRolRepartidor`, formData, { headers: headersToken });
}

  eliminarUsuarioRolRepartidor(idUsuario,token) {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.delete(this.url + '/eliminarRolRepartidor/' + idUsuario, { headers: headersToken });
  }

  obteneUsuarioRolRepartidorId(idUsuario,token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/getUsuarioIdRolRepartidor/' + idUsuario, { headers: headersToken });
  }

  editarRolRepartidor(modeloUsuario: Usuario, token): Observable<any> {
    let parametros = JSON.stringify(modeloUsuario);
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.put(this.url + '/editarRolRepartidor/' + modeloUsuario._id, parametros, { headers: headersToken });
  }

  /*--------------- ADMINISTRACION DEL ROL CAJERO ---------------------- */

  obtenerUsuariosRolCajero(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/getRolCajero', { headers: headersToken });
  }

  /*agregarUsuarioRolCajero(modeloUsuario: Usuario, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    let parametros = JSON.stringify(modeloUsuario);
    return this._http.post(this.url + '/agregarRolCajero', parametros, { headers: headersToken });
  }*/

  agregarUsuarioRolCajero(
    modeloUsuario: Usuario,
    modeloSucursal: Sucursal, // Asegúrate de que este modelo está bien definido
    token: string,
    imagen: File
  ): Observable<any> {
    const formData = new FormData();
    formData.append('nombre', String(modeloUsuario.nombre || ''));
    formData.append('apellido', String(modeloUsuario.apellido || ''));
    formData.append('email', String(modeloUsuario.email || ''));
    formData.append('password', String(modeloUsuario.password || ''));
    formData.append('telefono', modeloUsuario.telefono != null ? modeloUsuario.telefono.toString() : '0');
    formData.append('direccion', String(modeloUsuario.direccion || ''));
    formData.append('departamento', String(modeloUsuario.departamento || ''));
    formData.append('municipio', String(modeloUsuario.municipio || ''));
    formData.append('nombreSucursal', String(modeloSucursal.nombreSucursal || '')); // Uso correcto del modeloSucursal

    if (imagen) {
      formData.append('imagen', imagen, imagen.name); // Agregar la imagen al FormData
    }

    const headersToken = new HttpHeaders().set('Authorization', token);

    return this._http.post(`${this.url}/agregarRolCajero`, formData, { headers: headersToken });
  }

  eliminarUsuarioRolCajero(idUsuario,token) {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.delete(this.url + '/eliminarRolCajero/' + idUsuario, { headers: headersToken });
  }

  obtenerUsuarioRolCajeroId(idUsuario,token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/getRolIdCajero/' + idUsuario, { headers: headersToken });
  }

  editarRolCajero(modeloUsuario: Usuario, token): Observable<any> {
    let parametros = JSON.stringify(modeloUsuario);
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.put(this.url + '/editarRolCajero/' + modeloUsuario._id, parametros, { headers: headersToken });
  }


  /* SERVICIOS PARA EDITAR PERFIL */
  modificarPerfilAdmin(
    modeloUsuarios: Usuario,
    token: string,
    imagen?: File // Añadido el parámetro de imagen
  ): Observable<any> {

    const formData = new FormData();

    // Agregar los campos de usuario al FormData
    formData.append('nombre', String(modeloUsuarios.nombre || ''));
    formData.append('apellido', String(modeloUsuarios.apellido || ''));
    formData.append('email', String(modeloUsuarios.email || ''));
    formData.append('telefono', modeloUsuarios.telefono != null ? modeloUsuarios.telefono.toString() : '0');
    formData.append('direccion', String(modeloUsuarios.direccion || ''));
    formData.append('departamento', String(modeloUsuarios.departamento || ''));
    formData.append('municipio', String(modeloUsuarios.municipio || ''));

    // Si se proporciona una imagen, añadirla a FormData
    if (imagen) {
      formData.append('imagen', imagen, imagen.name);
    }

    const headersToken = new HttpHeaders().set('Authorization', token);

    // Realizar la petición PUT
    return this._http.put(`${this.url}/editarPerfilAdmin/${modeloUsuarios._id}`, formData, { headers: headersToken });
  }

  /* OBTENER TODAS LAS SUCURSALES */

  obtenerSucursales(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/obtenerSucursalesTodas', {
      headers: headersToken,
    });
  }


   // VER caja
   obtenerTodasCajas(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/ObtenerTodasCajas', { headers: headersToken });
  }


  // agregar caja



  agregarCajaSucursal(
    modeloSucursal: Sucursal,
    modeloCaja: Caja,
    token: string,
  ): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    // Combina los campos en un solo objeto
    const parametros = {
        nombreSucursal: modeloSucursal.nombreSucursal,
        efectivoGeneral: modeloCaja.efectivoGeneral,
        // Agrega otros campos de modeloFactura si es necesario
    };

    return this._http.post(this.url + '/agregarCaja', parametros, { headers: headersToken });
  }

  eliminarCajaSucursal(idCaja,token) {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.delete(this.url + '/eliminarCaja/' + idCaja, { headers: headersToken });
  }

  obtenerCajaId(idCaja,token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/getCajaPorId/' + idCaja, { headers: headersToken });
  }

  editarCajaSucursal(modeloCaja: Caja, token): Observable<any> {
    let parametros = JSON.stringify(modeloCaja);
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.put(this.url + '/editarCaja/' + modeloCaja._id, parametros, { headers: headersToken });
  }

}
