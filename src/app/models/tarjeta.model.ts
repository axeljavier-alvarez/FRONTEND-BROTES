//Nuevo modelo
export class Tarjeta {
  constructor(
    public _id: String,
    public saldo: Number,
    public numeroTarjeta: Number,
    public nombreUsuario: String,
    public mesExpiracion: Number,
    public yearExpiracion: Number,
    public codigoSeguridad: Number,
    public tipoTarjeta: String,
  ) { }
}
