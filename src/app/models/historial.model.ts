export class Historial {
  constructor(
    public _id: String,
    public clienteId: String,
    public fecha: Date,
    public tipo: String,
    public mensaje: String,
    public humedad_actual: number,
    public metodo: String,
    public precio: number
  ) {}
}
