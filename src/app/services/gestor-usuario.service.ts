import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';
import { Empresa } from '../models/empresa.model';
import { Producto } from '../models/productos.model';
import { Usuario } from '../models/usuarios.model';

@Injectable({
  providedIn: 'root',
})
export class GestorUsuarioService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );

  constructor(public _http: HttpClient) {}

  /*------------------------ADMINISTRACION DE CATEGORIAS------------------------*/

  //VER CATEGORIAS
  obtenerCategorias(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getCategorias', {
      headers: headersToken,
    });
  }

  //AGREGAR CATEGORIAS
  agregarCategoria(modeloCategoria: Categoria, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloCategoria);
    return this._http.post(this.url + '/agregarCategoria', parametros, {
      headers: headersToken,
    });
  }

  //ELIMINAR CATEGORIAS
  eliminarCategoria(idCategoria, token) {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarCategoria/' + idCategoria, {
      headers: headersToken,
    });
  }

  //OBTENER CATEGORIA POR ID
  obtenerCategoriaId(idCategoria, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(
      this.url + '/getCategoriaRolGestorID/' + idCategoria,
      { headers: headersToken }
    );
  }

  //EDITAR CATEGORIA
  editarCategoria(modeloCategoria: Categoria, token): Observable<any> {
    let parametros = JSON.stringify(modeloCategoria);
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(
      this.url + '/editarCategoria/' + modeloCategoria._id,
      parametros,
      { headers: headersToken }
    );
  }

  /*------------------------ADMINISTRACION DE EMPRESAS------------------------*/

  //VER EMPRESAS
  obtenerEmpresas(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getEmpresaRolGestor', {
      headers: headersToken,
    });
  }

  //AGREGAR EMPRESAS
  agregarEmpresas(modeloEmpresa: Empresa, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloEmpresa);
    return this._http.post(this.url + '/agregarEmpresaRolGestor', parametros, {
      headers: headersToken,
    });
  }

  //ELIMINAR EMPRESAS
  eliminarEmpresas(idEmpresa, token) {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(
      this.url + '/eliminarEmpresaRolGestor/' + idEmpresa,
      { headers: headersToken }
    );
  }

  //OBTENER EMPRESA POR ID
  obtenerEmpresaId(idEmpresa, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getEmpresaIdRolGestor/' + idEmpresa, {
      headers: headersToken,
    });
  }

  //EDITAR EMPRESA
  editarEmpresa(modeloEmpresa: Empresa, token): Observable<any> {
    let parametros = JSON.stringify(modeloEmpresa);
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(
      this.url + '/editarEmpresaRolGestor/' + modeloEmpresa._id,
      parametros,
      { headers: headersToken }
    );
  }

  /*------------------------ADMINISTRACION DE SUCURSALES------------------------*/
  obtenerSucursalesGestor(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verSucursalGestorRegistrado', {
      headers: headersToken,
    });
  }

  /*------------------------ADMINISTRACION DE PRODUCTOS ------------------------*/
  obtenerProductosIdCategoria(idCategoria, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verProductosPorCategorias/' + idCategoria,
      { headers: headersToken }
    );
  }

  obtenerProductosPorRolGestor(idSucursal: string, idCategoria: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verProductosRolGestor/' + idSucursal + '/' + idCategoria,
      { headers: headersToken }
    );
  }

  /* AgregarNuevoProducto(
    modeloProducto: Producto,
    token: string,
    idSucursal: string,
    idCategoria: string
  ): Observable<any> {
    // Crea un nuevo FormData
    const formData = new FormData();
    formData.append('nombreProducto', String(modeloProducto.nombreProducto || ''));
    formData.append('marca', String(modeloProducto.marca || ''));
    formData.append('descripcion', String(modeloProducto.descripcion || ''));
    formData.append('stock', modeloProducto.stock != null ? modeloProducto.stock.toString() : '0');
    formData.append('precio', modeloProducto.precio != null ? modeloProducto.precio.toString() : '0');
    formData.append('size', String(modeloProducto.size || ''));

    // Establece las cabeceras, pero no incluyas Content-Type para FormData
    const headersToken = new HttpHeaders().set('Authorization', token);

    return this._http.post(
      `${this.url}/agregarProductosRolGestor/${idSucursal}/${idCategoria}`,
      formData,
      { headers: headersToken }
    );
  } */


    AgregarNuevoProducto(
      modeloProducto: Producto,
      token: string,
      idSucursal: string,
      idCategoria: string,
      imagen: File // Agrega este parámetro para la imagen
    ): Observable<any> {
      const formData = new FormData();
      formData.append('nombreProducto', String(modeloProducto.nombreProducto || ''));
      formData.append('marca', String(modeloProducto.marca || ''));
      formData.append('descripcion', String(modeloProducto.descripcion || ''));
      formData.append('stock', modeloProducto.stock != null ? modeloProducto.stock.toString() : '0');
      formData.append('precio', modeloProducto.precio != null ? modeloProducto.precio.toString() : '0');
      formData.append('size', String(modeloProducto.size || ''));

      // Asegúrate de que la imagen no sea nula antes de agregarla
      if (imagen) {
        formData.append('imagen', imagen, imagen.name); // Agregar la imagen al FormData
      }

      const headersToken = new HttpHeaders().set('Authorization', token);

      return this._http.post(
        `${this.url}/agregarProductosRolGestor/${idSucursal}/${idCategoria}`,
        formData,
        { headers: headersToken }
      );
    }


  obtenerProductos(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/verTodosProductos', {
      headers: headersToken,
    });
  }

  eliminarProductos(idProducto,token){
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.delete(this.url + '/eliminarProductosRolGestor/' + idProducto, { headers: headersToken });
  }

  obtenerProductoId(idProducto,token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.get(this.url + '/verProductosPorId/' + idProducto, { headers: headersToken });
  }

  editarProducto(modeloProducto: Producto, token): Observable<any> {
    let parametros = JSON.stringify(modeloProducto);
    let headersToken = this.headersVariable.set('Authorization',token);
    return this._http.put(this.url + '/editarProductosRolGestor/' + modeloProducto._id, parametros, { headers: headersToken });
  }

  obtenerRolGestorId(idUsuario, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getUsuarioRolGestor/' + idUsuario, { headers: headersToken });
  }

  /*modificarPerfilGestor(modeloUsuarios: Usuario, token): Observable<any> {
    let parametros = JSON.stringify(modeloUsuarios);
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(this.url + '/editarPerfilGestor/' + modeloUsuarios._id, parametros, { headers: headersToken });
  }*/

  modificarPerfilGestor(
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
    return this._http.put(`${this.url}/editarPerfilGestor/${modeloUsuarios._id}`, formData, { headers: headersToken });
  }


  productosInventario(idCategoria, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(
      this.url + '/productosInventario/' + idCategoria,
      { headers: headersToken }
    );
  }

    // ver productos por sucursal
    obtenerProductosDeMiSucu(token): Observable<any> {
      let headersToken = this.headersVariable.set('Authorization', token);

      return this._http.get(this.url + '/obtenerProductosDeMiSucu', {
        headers: headersToken,
      });
    }


    obtenerUsuariosSucursal(idCategoria, token): Observable<any> {
      let headersToken = this.headersVariable.set('Authorization', token);
      return this._http.get(
        this.url + '/obtenerUsuariosSucursal/' + idCategoria,
        { headers: headersToken }
      );
    }




}
