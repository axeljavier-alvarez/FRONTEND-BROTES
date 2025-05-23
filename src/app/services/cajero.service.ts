import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuarios.model';
import { Pedido } from '../models/pedido.model';
import { Factura } from '../models/factura.model';
import { Sucursal } from '../models/sucursal.model';
import { Caja } from '../models/caja.model';

@Injectable({
  providedIn: 'root'
})
export class CajeroService {


  public url: String = 'http://localhost:3000/api';

  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad;
  public token;
  // public idEmpresa;

  constructor(public _http: HttpClient) { }

  obtenerRolCajeroId(idUsuario, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getRolIdCajero/' + idUsuario, { headers: headersToken });
  }

  /*modificarPerfilCajero(modeloUsuarios: Usuario, token): Observable<any> {
    let parametros = JSON.stringify(modeloUsuarios);
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(this.url + '/editarPerfilCajero/' + modeloUsuarios._id, parametros, { headers: headersToken })

  }*/

  /* SERVICIOS PARA EDITAR PERFIL */
  modificarPerfilCajero(
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
    return this._http.put(`${this.url}/editarPerfilCajero/${modeloUsuarios._id}`, formData, { headers: headersToken });
  }

  // VER PEDIDOS
  obtenerPedidos(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verPedidosRolCajero', { headers: headersToken });
  }

  // VER SUCURSAL
  obtenerSucursal(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verSucursalCajeroRegistrado', { headers: headersToken });
  }


  obtenerPedidosPendientesPorSucursal(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/pedidoEnEsperaCredito/' + idSucursal,
      { headers: headersToken }
    );
  }

  obtenerPedidosConfirmadosPorSucursal(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/pedidoConfirmadoCredito/' + idSucursal,
      { headers: headersToken }
    );
  }


  /* nuevas funciones */
  obtenerRepartidoresPorSucursal(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/getRepartidoresPorIdSucursal/' + idSucursal,
      { headers: headersToken }
    );
  }


  obtenerPedidoPorId(idPedido, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/getPedidoPorId/' + idPedido, { headers: headersToken });

  }


  editarPedido(modeloPedido: Pedido, token): Observable<any> {

    let parametros = JSON.stringify(modeloPedido);

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(this.url + '/editarPedidosRolCajero/' + modeloPedido._id, parametros, { headers: headersToken })

  }



  obtenerRolRepartidorId(idUsuario, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/getRepartidorId/' + idUsuario, { headers: headersToken });

  }

  putAsignarRepartidor(idRepartidor: String, numeroDeOrden: Number, token): Observable<any> {
    const parametros = JSON.stringify({ numeroDeOrden }); // Enviar solo el numeroDeOrden
    const headersToken = this.headersVariable.set('Authorization', token);

    return this._http.put(
      this.url + '/asignarPedidoRepartidor/' + idRepartidor,
      parametros,
      { headers: headersToken }
    );
  }


  asignarPedidoRepartidor(
    modeloUsuario: Usuario,
    modeloPedido: Pedido,
    token: string,
  ): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    // Combina los campos en un solo objeto
    const parametros = {
      email: modeloUsuario.email,
      numeroDeOrden: modeloPedido.numeroDeOrden,
      // Agrega otros campos de modeloFactura si es necesario
    };

    return this._http.post(this.url + '/asignarPedidoRepartidor', parametros, { headers: headersToken });
  }


  /* VER PEDIDOS DEPENDIENDO DEL CASO */

  verPedidosSinConfirmarEfectivo(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verPedidosSinConfirmarEfectivo/' + idSucursal,
      { headers: headersToken }
    );
  }


  verPedidosSinConfirmarCredito(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verPedidosSinConfirmarCredito/' + idSucursal,
      { headers: headersToken }
    );
  }


  verPedidosConfirmadosEfectivo(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/pedidoConfirmadoEfectivo/' + idSucursal,
      { headers: headersToken }
    );
  }


  /* repartidores ocupados */
  obtenerRepartidoresOcupadosPorIdSucursal(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/getRepartidoresOcupadosPorIdSucursal/' + idSucursal,
      { headers: headersToken }
    );
  }

  /* generar factura */
  generarFacturaPagoEfectivo(
    modeloFactura: Factura,
    modeloSucursal: Sucursal,
    modeloCaja: Caja,
    token: string,
    idEmpresa: string
  ): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);


    const parametros = {
      nit: modeloFactura.nit,
      nombreSucursal: modeloSucursal.nombreSucursal,
      vueltosCliente: modeloCaja.vueltosCliente
      // Agrega otros campos de modeloFactura si es necesario
    };

    return this._http.post(this.url + '/generarFacturaPagoEfectivo/' + idEmpresa, parametros, { headers: headersToken });

  }


  /* ver factura por id sucu */



  obtenerFacturasPorIdSucursal(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/obtenerFacturasPorIdSucursal/' + idSucursal,
      { headers: headersToken }
    );
  }


  // metodo para ver caja en tareas


  verCajaPorSucursal(idSucursal: string, token: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verCajaPorSucursal/' + idSucursal,
      { headers: headersToken }
    );
  }



  // metodo para ver caja pero que coincida con mi id

  verCajaPorUsuario(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verCajaPorUsuario', { headers: headersToken });
  }

  // poder confirmar un pedido, cambiar estado, desasignar y archivar estado


  confirmarPedidoCredito(
    modeloPedido: Pedido,
    modeloSucursal: Sucursal,
    token: string,
  ): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    // Combina los campos en un solo objeto
    const parametros = {
      numeroDeOrden: modeloPedido.numeroDeOrden,

      nombreSucursal: modeloSucursal.nombreSucursal

      // Agrega otros campos de modeloFactura si es necesario
    };

    return this._http.post(this.url + '/confirmarPedidoCredito', parametros, { headers: headersToken });
  }

  // ver pedido del repartidor




  verPedidoUsuario(idUsuario, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verPedidoUsuario/' + idUsuario,
      { headers: headersToken }
    );
  }


  confirmarPedidoGeneradoEfectivo(
    modeloPedido: Pedido,
    modeloSucursal: Sucursal,
    modeloCaja: Caja,
    token: string,
  ): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    // Combina los campos en un solo objeto
    const parametros = {
      numeroDeOrden: modeloPedido.numeroDeOrden,

      nombreSucursal: modeloSucursal.nombreSucursal,

      totalPedidosEfectivo: modeloCaja.totalPedidosEfectivo

      // Agrega otros campos de modeloFactura si es necesario
    };

    return this._http.post(this.url + '/confirmarPedidoGeneradoEfectivo', parametros, { headers: headersToken });
  }


  /* ver pedido confirmado */

  pedidosEntregadosCredito(idSucursal, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/pedidosEntregadosCredito/' + idSucursal, { headers: headersToken });

  }


  pedidosEntregadosEfectivoGenerados(idSucursal, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/pedidosEntregadosEfectivoGenerados/' + idSucursal, { headers: headersToken });

  }


  eliminarPedidosSinConfirmar(idPedido, token) {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarPedidosSinConfirmar/' + idPedido, { headers: headersToken });

  }
  

}
