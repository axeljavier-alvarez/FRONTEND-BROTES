import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuarios.model';
import { Caja } from '../models/caja.model';

@Injectable({
  providedIn: 'root'
})
export class FacturadorService {

  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad;
  public token;

  constructor(public _http: HttpClient) { }

  obtenerRolFacturadorId(idUsuario, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getUsuarioRolFacturador/' + idUsuario, { headers: headersToken });
  }

  /*modificarPerfilFacturador(modeloUsuarios: Usuario, token): Observable<any> {
    let parametros = JSON.stringify(modeloUsuarios);
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(this.url + '/editarPerfilFacturador/' + modeloUsuarios._id, parametros, { headers: headersToken })
  }*/

  /* SERVICIOS PARA EDITAR PERFIL */
  modificarPerfilFacturador(
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
    return this._http.put(`${this.url}/editarPerfilFacturador/${modeloUsuarios._id}`, formData, { headers: headersToken });
  }

  // VER SUCURSAL
  obtenerSucursal(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verSucursalFacturadorRegistrado', {headers: headersToken });
  }

  // ver facturas que genero el cajero

  obtenerFacturasPorIdSucursal(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/obtenerFacturasPorIdSucursal/' + idSucursal,
      { headers: headersToken }
    );
  }

  // ver caja por sucursal

  verCajaPorSucursal(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verCajaPorSucursal/' + idSucursal,
      { headers: headersToken }
    );
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


  verFacturaCredito(idSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verFacturaCredito/' + idSucursal,
      { headers: headersToken }
    );
  }

  

}
