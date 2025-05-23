export class Carrito{
    constructor(
        public _id: String,
        public idUsuario: String,
        public compras:[{
            idProducto: String,
            nombreProducto: String,
            marca: String,
            imagen: String,
            cantidad: Number,
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
        public total: Number

    ){}
}
