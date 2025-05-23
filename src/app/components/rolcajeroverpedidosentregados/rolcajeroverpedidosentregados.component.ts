import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CajeroService } from 'src/app/services/cajero.service';
import { Pedido } from 'src/app/models/pedido.model';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolcajeroverpedidosentregados',
  templateUrl: './rolcajeroverpedidosentregados.component.html',
  styleUrls: ['./rolcajeroverpedidosentregados.component.scss'],
  providers: [UsuarioService, CajeroService]
})
export class RolcajeroverpedidosentregadosComponent implements OnInit {

  public token;
  public idSucursal;
  public PedidoModelGet: Pedido;
  public PedidoModelGet2: Pedido;

  constructor(

    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _cajeroService: CajeroService,
    private router: Router

  ) {
    this.titleService.setTitle('Pedidos confirmados');
    this.token = this._usuarioService.obtenerToken();


  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idSucursal = localStorage.getItem('idSucursal'); // Obtener el idSucursal

      if (this.idSucursal) {
        this.getpedidosEntregadosCredito(this.idSucursal, this.token);
        this.getpedidosEntregadosEfectivoGenerados(this.idSucursal, this.token);

      }

      console.log(this.idSucursal);  // Verificar el idSucursal
    });

  }



  getpedidosEntregadosCredito( idSucursal: string, token: string) {
    this._cajeroService
      .pedidosEntregadosCredito(idSucursal, token)
      .subscribe(
        (response) => {
          this.PedidoModelGet = response.pedidos; // Asignar los productos a la variable
          console.log(this.PedidoModelGet); // Verifica la respuesta
        },
        (error) => {
          console.log(<any>error); // Manejo de errores
        }
      );
  }


  getpedidosEntregadosEfectivoGenerados( idSucursal: string, token: string) {
    this._cajeroService
      .pedidosEntregadosEfectivoGenerados(idSucursal, token)
      .subscribe(
        (response) => {
          this.PedidoModelGet2 = response.pedidos; // Asignar los productos a la variable
          console.log(this.PedidoModelGet2); // Verifica la respuesta
        },
        (error) => {
          console.log(<any>error); // Manejo de errores
        }
      );
  }



}
