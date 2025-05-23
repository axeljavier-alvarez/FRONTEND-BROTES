import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarsucursal'
})
export class BuscarsucursalPipe implements PipeTransform {

  transform(sucursales:any,buscarSucursal:any): any {
    if(buscarSucursal == undefined){
      return sucursales;
    }else{
      return sucursales.filter( userN =>{
        return userN.nombreSucursal.toLowerCase().includes(buscarSucursal.toLowerCase());
      })
    }
  }
}
