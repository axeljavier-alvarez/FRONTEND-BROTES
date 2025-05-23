import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Producto } from 'src/app/models/productos.model';
import { GestorUsuarioService } from 'src/app/services/gestor-usuario.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ver-ganancias',
  templateUrl: './ver-ganancias.component.html',
  styleUrls: ['./ver-ganancias.component.scss'],
  providers: [GestorUsuarioService, UsuarioService]
})
export class VerGananciasComponent implements OnInit {

  public token;
  public productoModelGet: any = [];

  chartOptions = {
    responsive: true,
    scales: {
        x: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Productos'
            }
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Cantidad Vendida'
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
        },
        title: {
            display: true,
            text: 'Ventas por Producto'
        }
    }
  };

  chartLabels: any = [];
  chartData: any = [];
  chartColors = [{
    backgroundColor: []
  }];

  chartLegend = true;
  chartPlugins = [];

  constructor(
    private titleService: Title,
    private _gestorUsuariosService: GestorUsuarioService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Ver ganancias');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this._gestorUsuariosService.obtenerProductosDeMiSucu(this._usuarioService.obtenerToken()).subscribe(
      (response) => {
        this.productoModelGet = response.productos;
        this.productoModelGet.forEach(dato => {
          console.log(dato.nombreProducto);
          this.chartLabels.push(dato.nombreProducto);
          this.chartData.push(dato.vendido);
          this.chartColors[0].backgroundColor.push(`#${ Math.floor(Math.random()*16777215).toString(16)}`);
        });
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
