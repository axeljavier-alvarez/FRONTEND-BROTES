export class Efectivo{
  constructor(
      public _id: String,
      public efectivoCliente: Number,
      public cambioCliente:Number,
      public totalPedido: Number,
      public nit: String,
  ){}
}
