export class Planta {
  constructor(

    public _id: String,
    public nombre: String,
    public estado: String,
    public fecha_registro: Date,
    public size: String,
    public imagen: String,


    public datosCategoria: [{
      idCategoria: String,
      nombreCategoria: String,
      descripcionCategoria: String
    }],

    public datosCliente: [{
        idUsuario: String,
        nombre: String,
        apellido: String,
        email: String,
        telefono: String,
        direccion: String,
        departamento: String,
        municipio: String,
        rol: String
    }],

    public datosHistorial: [{
        idHistorial: String,
        clienteId: String,
        fecha: Date,
        tipo: String,
        mensaje: String,
        humedad_actual: Number,
        metodo: String,
        precio: Number
    }],

    public datosSucursal: [{
        idSucursal: String,
        nombreSucursal: String,
        direccionSucursal: String,
        telefonoSucursal: Number,
        departamento: String,
        municipio: String
    }],


  ) {

  }
}
