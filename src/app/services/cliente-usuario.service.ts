import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/productos.model';
import { Efectivo } from '../models/efectivo.model';
import { Carrito } from '../models/carrito.model';
import { Usuario } from '../models/usuarios.model';
import { Pedido } from '../models/pedido.model';
import { Factura } from '../models/factura.model';
import { Tarjeta } from '../models/tarjeta.model';
import { CarritoEditar } from '../models/carritoeditar.model';


@Injectable({
  providedIn: 'root'
})
export class ClienteUsuarioService {

  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set(
    'Content-Type',
    'application/json'
  );
  constructor(public _http: HttpClient) { }

  /*---------------------- SUCURSALES ------------------------*/

  //VER CATEGORIAS
  obtenerSucursales(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verTodasSucursalesRolCliente', {
      headers: headersToken,
    });
  }


  // ver productos por sucursal
  obtenerProductosPorIdSucursal(idSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(
      this.url + '/verProductosPorSucursal/' + idSucursal,
      { headers: headersToken }
    );
  }


  agregarProductoAlCarrito(modeloProducto: Producto, token): Observable<any> {
    let parametros = JSON.stringify(modeloProducto);
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(this.url + '/registrarCarritoPorId/' + modeloProducto._id, parametros, { headers: headersToken });

  }



  /* carritos funcion 1 prueba */
  AgregarNuevoProducto(modeloCarrito: Carrito, token: string, idProducto: string): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloCarrito);

    return this._http.put(this.url + '/registrarCarritoPorId/' + idProducto, parametros, { headers: headersToken });

  }

  /* carritos funcion 2 prueba */
  putProductoCarrito(idProducto: String, cantidad: Number, token): Observable<any> {
    const parametros = JSON.stringify({ cantidad }); // Solo envía la cantidad
    const headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(
      this.url + '/registrarCarritoPorId/' + idProducto, parametros, { headers: headersToken }
    );
  }

  obtenerProductoid(idProducto, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/verProductoPorIdRolCliente/' + idProducto, { headers: headersToken });

  }


  obtenerCarritos(token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/verCarritosClienteRegistrado', { headers: headersToken });
  };


  verCarritoCliente(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/verCarritosClienteRegistrado', { headers: headersToken })
  }


  /*VER CATEGORIAS GENERALES */
  obtenerCategotiasRolCliente(token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);

    return this._http.get(this.url + '/getCategoriasRolCliente', { headers: headersToken });

  };

  obtenerRolClienteId(idUsuario, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/getUsuarioRolCliente/' + idUsuario, { headers: headersToken });
  }

  /*modificarPerfilCliente(modeloUsuarios: Usuario, token): Observable<any> {
    let parametros = JSON.stringify(modeloUsuarios);
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.put(this.url + '/editarPerfilCliente/' + modeloUsuarios._id, parametros, { headers: headersToken })
  }*/
  /* SERVICIOS PARA EDITAR PERFIL */
  modificarPerfilCliente(
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
    return this._http.put(`${this.url}/editarPerfilCliente/${modeloUsuarios._id}`, formData, { headers: headersToken });
  }


  // PEDIDOS
  agregarPedidoCliente(modeloPedido: Pedido, token: string, idCarrito: string): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token);
    let parametros = JSON.stringify(modeloPedido);

    return this._http.post(this.url + '/generarPedido/' + idCarrito, parametros, { headers: headersToken });
  }

  // VER PEDIDOS
  obtenerPedidos(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verPedidosClienteRegistrado', { headers: headersToken });
  }

  verPedidosSinConfirmarCliente(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.get(this.url + '/verPedidosSinConfirmarCliente', { headers: headersToken });
  }

  // generar todas las facturas

  generarFacturaRolCliente(
    modeloFactura: Factura,
    modeloTarjeta: Tarjeta,
    token: string,
): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token);

    // Combina los campos en un solo objeto
    const parametros = {
        nit: modeloFactura.nit,
        numeroTarjeta: modeloTarjeta.numeroTarjeta,
        nombreUsuario: modeloTarjeta.nombreUsuario,
        mesExpiracion: modeloTarjeta.mesExpiracion,
        yearExpiracion: modeloTarjeta.yearExpiracion,
        codigoSeguridad: modeloTarjeta.codigoSeguridad,
        tipoTarjeta: modeloTarjeta.tipoTarjeta,
        // Agrega otros campos de modeloFactura si es necesario
    };

    return this._http.post(this.url + '/crearFacturaCliente', parametros, { headers: headersToken });
}


// ver pedidos en espera de cliente
obtenerPedidosEnEspera(token): Observable<any> {
  let headersToken = this.headersVariable.set('Authorization', token);
  return this._http.get(this.url + '/pedidoClienteSinConfirmar', { headers: headersToken });
}



obtenerFacturasPorPedido(idPedido: string, token: string): Observable<any> {
  let headersToken = this.headersVariable.set('Authorization', token);

  return this._http.get(
    this.url + '/verFacturaPorPedido/' + idPedido,
    { headers: headersToken }
  );
}


confirmarPedidoEfectivo(
  modeloPedido: Pedido,
  token: string,
): Observable<any> {
  let headersToken = this.headersVariable.set('Authorization', token);



  // Obtiene el primer elemento del array pagoEfectivo
  const pagoEfectivo = modeloPedido.pagoEfectivo[0];

  // Combina los campos en un solo objeto
  const parametros = {
      efectivoCliente: pagoEfectivo.efectivoCliente,
      nit: pagoEfectivo.nit,
      // Agrega otros campos de modeloFactura si es necesario
  };

  return this._http.post(this.url + '/confirmarPedidoEfectivo', parametros, { headers: headersToken });

}


// ver pedidos en espera de cliente
verPedidosConfirmadosEfectivo(token): Observable<any> {
  let headersToken = this.headersVariable.set('Authorization', token);
  return this._http.get(this.url + '/verPedidosConfirmadosEfectivo', { headers: headersToken });
}



obtenerPedidosSinConfirmarEfectivo(token): Observable<any> {
  let headersToken = this.headersVariable.set('Authorization', token);
  return this._http.get(this.url + '/pedidoClienteEfectivoSinConfirmar', { headers: headersToken });
}


actualizarStockProducto(modeloCarritoEditar: CarritoEditar, token): Observable<any> {
  const parametros = JSON.stringify(modeloCarritoEditar);
  const headersToken = this.headersVariable.set('Authorization', token);

  return this._http.put(`${this.url}/actualizarStockProducto`, parametros, { headers: headersToken });
}



verProductoCarritoPorId(idProducto, token): Observable<any> {

  let headersToken = this.headersVariable.set('Authorization', token);

  return this._http.get(this.url + '/verProductoCarritoPorId/' + idProducto, { headers: headersToken });

}


eliminarProductoCarrito(idProducto, token) {
  let headersToken = this.headersVariable.set('Authorization', token);
  return this._http.delete(this.url + '/eliminarProductoDelCarrito/' + idProducto, { headers: headersToken });

}



eliminarPedidosSinConfirmar(idPedido, token) {
  let headersToken = this.headersVariable.set('Authorization', token);
  return this._http.delete(this.url + '/eliminarPedidosSinConfirmar/' + idPedido, { headers: headersToken });

}





}
