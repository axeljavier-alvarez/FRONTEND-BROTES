import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarplantapipe'
})
export class BuscarplantapipePipe implements PipeTransform {

  transform(plantas: any[], textoBusqueda: string): any[] {
    if (!textoBusqueda || textoBusqueda.trim() === '') {
      return plantas;
    }

    return plantas.filter(planta =>
      planta.nombre.toLowerCase().includes(textoBusqueda.toLowerCase())
    );
  }
}
