import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarproducto'
})
export class BuscarproductoPipe implements PipeTransform {

  transform(productos:any,buscarProd:any): any {
    if(buscarProd == undefined){
      return productos;
    }else{
      return productos.filter( userN =>{

       return userN.nombreProducto.toLowerCase().includes(buscarProd.toLowerCase());
      })
    }
  }
}
