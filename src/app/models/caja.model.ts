export class Caja{
  constructor(
    public _id: string,
    public efectivoGeneral: Number,
    public vueltosCliente: Number,
    public totalPedidosCredito: Number,
    public totalPedidosEfectivo: Number,
    public totalEfectivoFactura: Number,

    public datosSucursal: Array<{ // Cambiado a Array<>
      idSucursal: string,
      nombreSucursal: string,
      direccionSucursal: string,
      telefonoSucursal: string,
      departamento: string,
      municipio: string
    }>,

  public historialPedidosEfectivo: [{

      idPedido: string,
      fecha: Date,
      tipoPago: string,
      direccionEnvio: string,
      horaEntrega: string,
      metodoEnvio: string,
      descuentos: Number,
      numeroDeOrden: Number,
      estadoPedido:string,
      incrementoEnvio: Number,
      estadoOrden:string,
      horaRepartidorAsignado: Date,
      horaPedidoEntregado: Date,
      total: Number,


      pagoEfectivo: [{
          idEfectivo: string,
          efectivoCliente: Number,
          cambioCliente:Number,
          totalPedido: Number
      }],

      compras: [{
        idProducto: string,
        nombreProducto: string,
        marca: string,
        cantidad: Number,
        size:string,
        precio: Number,
        subTotal: Number,
        descripcionCategoria: [{
            idCategoria: string,
            nombreCategoria: string,
        }],
        datosSucursal: [{
            idSucursal: string,
            nombreSucursal: string,
            direccionSucursal: string,
            telefonoSucursal: string,
            departamento: string,
            municipio: string
        }],


     }],


  }],


  public historialPedidosCredito: [{

      idPedido: string,
      fecha: Date,
      tipoPago: string,
      direccionEnvio: string,
      horaEntrega: string,
      metodoEnvio: string,
      descuentos: Number,
      numeroDeOrden: Number,
      estadoPedido:string,
      incrementoEnvio: Number,
      estadoOrden:string,
      horaRepartidorAsignado: Date,
      horaPedidoEntregado: Date,
      total: Number,
      pagoEfectivo: [{
          idEfectivo: string,
          efectivoCliente: Number,
          cambioCliente:Number,
          totalPedido: Number
      }],

      repartidorAsignado: [{

          idRepartidor: string,
          nombre: string,
          apellido: string,
          email: string,
          telefono: Number,
          rol: string,
          estadoRepartidor: string
      }],

      compras: [{
          idProducto: string,
          nombreProducto: string,
          marca: string,
          cantidad: Number,
          size:string,
          precio: Number,
          subTotal: Number,
          descripcionCategoria: [{
              idCategoria: string,
              nombreCategoria: string,
          }],
          datosSucursal: [{
              idSucursal: string,
              nombreSucursal: string,
              direccionSucursal: string,
              telefonoSucursal: string,
              departamento: string,
              municipio: string
          }],

      }],


  }],


  public historialPedidosEntregadosEfectivo: [{
    idPedido: string,
    fecha: Date,
    tipoPago: string,
    direccionEnvio: string,
    horaEntrega: string,
    metodoEnvio: string,
    descuentos: Number,
    numeroDeOrden: Number,
    estadoPedido:string,
    incrementoEnvio: Number,
    estadoOrden:string,
    horaRepartidorAsignado: Date,
    horaPedidoEntregado: Date,

    pagoEfectivo: [{
        idEfectivo: string,
        efectivoCliente: Number,
        cambioCliente:Number,
        totalPedido: Number
    }],

    repartidorAsignado: [{

        idRepartidor: string,
        nombre: string,
        apellido: string,
        email: string,
        telefono: Number,
        rol: string,
        estadoRepartidor: string
    }],


    compras: [{
        idProducto: string,
        nombreProducto: string,
        marca: string,
        cantidad: Number,
        size:string,
        precio: Number,
        subTotal: Number,
        descripcionCategoria: [{
            idCategoria: string,
            nombreCategoria: string,
        }],
        datosSucursal: [{
            idSucursal: string,
            nombreSucursal: string,
            direccionSucursal: string,
            telefonoSucursal: string,
            departamento: string,
            municipio: string
        }],

    }],


  }]
  ){}
}
