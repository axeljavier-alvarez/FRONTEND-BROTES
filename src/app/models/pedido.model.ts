export class Pedido{
  constructor(
      public _id: String,
      public idUsuario: String,

      public pagoEfectivo: [{
        idEfectivo: String,
        efectivoCliente: Number,
        cambioCliente:Number,
        totalPedido: Number,
        nit: String,
    }],

      public fecha: Date,
      public tiempoEstimado: String,
      public tipoPago: String,
      public estado: String,
      public direccionEnvio: String,
      public horaEntrega: String,
      public metodoEnvio: String,
      public descuentos: Number,
      public numeroDeOrden: Number,
      public pagoConfirmado: String,
      public incrementoEnvio: Number,
      public departamentoPedido: String,
      public municipioPedido: String,

      public estadoOrden:String,
      public horaRepartidorAsignado: Date,
      public horaPedidoEntregado: Date,

      public datosUsuario: [{
        idUsuario: String,
        nombre: String,
        apellido: String,
        email: String,
        telefono: Number
      }],

      public repartidorAsignado: [{

        idRepartidor: String,
        nombre: String,
        apellido: String,
        email: String,
        telefono: Number,
        rol: String,
        estadoRepartidor: String
    }],



      public compras:[{
        idProducto: String,
        nombreProducto: String,
        marca: String,
        cantidad: Number,
        size:String,
        precio: Number,
        subTotal: Number,

        descripcionCategoria:[{
            idCategoria: String,
            nombreCategoria: String
        }],

        datosSucursal:[{
            idSucursal:String,
            nombreSucursal: String,
            direccionSucursal: String,
            telefonoSucursal: String,
            departamento: String,
            municipio: String
        }]
    }],

    public  datosCajero: [{
      idCajero: String,
      nombre: String,
      apellido: String,
      email: String,
    }],
      public total: Number


  ){}
}
