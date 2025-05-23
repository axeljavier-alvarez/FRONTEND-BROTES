//Nuevo modelo
export class Factura{
    constructor(
      public nit: String,
      public fecha: Date,

     public datosCajero: [{
        idCajero: String,
        nombre: String,
        apellido: String,
        email: String,
    }],
      public  datosUsuario: [{
        idUsuario: String,
        nombre: String,
        apellido: String,
        email: String
      }],


      public datosPedido: [{

        idPedido: String,
        fecha: Date,
        tipoPago: String,
        direccionEnvio: String,
        horaEntrega: String,
        metodoEnvio: String,
        descuentos: Number,
        numeroDeOrden: Number,
      }],

      public compras: [{
        idProducto: String,
        nombreProducto: String,
        cantidad: Number,
        precio: Number,
        subTotal: Number,
        descripcionCategoria: [{
            idCategoria: String,
            nombreCategoria: String,
        }],
        datosSucursal: [{
            idSucursal: String,
            nombreSucursal: String,
            direccionSucursal: String,
            telefonoSucursal: String
        }]
      }],


      public total: Number,

    ){}
}
