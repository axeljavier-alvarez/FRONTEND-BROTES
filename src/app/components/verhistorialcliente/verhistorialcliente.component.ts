import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { UsuarioService } from 'src/app/services/usuario.service';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { Planta } from 'src/app/models/planta.model';
import { Historial } from 'src/app/models/historial.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verhistorialcliente',
  templateUrl: './verhistorialcliente.component.html',
  styleUrls: ['./verhistorialcliente.component.scss'],
  providers: [UsuarioService, GestorUsuarioService]
})
export class VerhistorialclienteComponent implements OnInit {

   public token;
    public HistorialModelGet: Historial[] = [];
   public idPlanta;

  constructor(
    public _activatedRoute: ActivatedRoute,
            private titleService: Title,
            private _gestorUsuarioService: GestorUsuarioService,
            private _usuarioService: UsuarioService

  ) {
      this.titleService.setTitle('Historial plantas');
        this.token = this._usuarioService.obtenerToken();

  }



   ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idPlanta = dataRuta.get('idPlanta');
      console.log(dataRuta.get('idPlanta'));
      this.getHistorialPorPlanta(dataRuta.get('idPlanta'));
      // this.getProductosSucursales();

    })
  }

  getHistorialPorPlanta(idPlanta) {
    this.
      _gestorUsuarioService.obtenerHistorialPorIdPlanta(idPlanta, this.token)
      .subscribe(
        (response) => {
          this.HistorialModelGet = response.historial;
          console.log(this.HistorialModelGet);
        },
        (error) => {
          console.log(<any>error);
        }
      );
  }
}
