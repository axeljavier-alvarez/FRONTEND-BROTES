import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rolrepartidortareas',
  templateUrl: './rolrepartidortareas.component.html',
  styleUrls: ['./rolrepartidortareas.component.scss'],
  providers: [UsuarioService]

})
export class RolrepartidortareasComponent implements OnInit {

  public token;


  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Tareas rol repartidor');
    this.token = this._usuarioService.obtenerToken();

   }

   ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      const idSucursal = dataRuta.get('idSucursal');

      if (idSucursal) {
        localStorage.setItem('idSucursal', idSucursal);
      }


      console.log(idSucursal);

    });


  }


}
