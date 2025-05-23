//  import { Pipe, PipeTransform } from '@angular/core';

/* @Pipe({
  name: 'buscarusuariopormunicipio'
}) */
/* export class BuscarusuariopormunicipioPipe implements PipeTransform {

  transform(usuarios:any,buscarUser:any): any {
    if(buscarUser == undefined){
      return usuarios;
    }else{
      return usuarios.filter( userN =>{ */
        /* aca se declara la variable */
       /* return userN.municipio.toLowerCase().includes(buscarUser.toLowerCase());
      })
    }
  }
}   */

  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'buscarusuariopormunicipio'
  })
  export class BuscarusuariopormunicipioPipe implements PipeTransform {
  
    transform(usuarios: any[], buscar: string, campo: string): any[] {
      if (!buscar || !campo) {
        return usuarios;
      }
  
      const normalizeString = (str: string) => {
        /* configurando tildes */
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      };
  
      const normalizedBuscar = normalizeString(buscar);
  
      return usuarios.filter(user => {
        const value = user[campo] ? normalizeString(user[campo].toString()) : '';
        return value.includes(normalizedBuscar);
      });
    }
  }