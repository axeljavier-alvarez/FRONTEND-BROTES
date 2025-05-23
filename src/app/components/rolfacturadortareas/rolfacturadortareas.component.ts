import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rolfacturadortareas',
  templateUrl: './rolfacturadortareas.component.html',
  styleUrls: ['./rolfacturadortareas.component.scss'],
  providers: [UsuarioService]

})
export class RolfacturadortareasComponent implements OnInit {

  public token;


  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService

  ) {
    this.titleService.setTitle('Tareas rol facturador');
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
