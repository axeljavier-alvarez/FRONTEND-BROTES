export class Sucursal {
  constructor(
    public _id: string, // Cambiar a string
    public nombreSucursal: string, // Cambiar a string
    public direccionSucursal: string, // Cambiar a string
    public telefonoSucursal: number, // Cambiar a Number
    public departamento: string, // Cambiar a string
    public municipio: string, // Cambiar a string
    public imagen: string, // Cambiar a string
    
    public datosEmpresa: {
      idEmpresa: string, // Cambiar a string
      nombreEmpresa: string, // Cambiar a string
      direccion: string, // Cambiar a string
      telefono: number // Cambiar a Number
    }[], // Debe ser un array de objetos con estas propiedades

    public gestorSucursales: {
      idUsuario: string, // Cambiar a string
      nombre: string, // Cambiar a string
      apellido: string, // Cambiar a string
      email: string, // Cambiar a string
      rol: string // Cambiar a string
    }[] // También debe ser un array de objetos con estas propiedades
  ) {}
}