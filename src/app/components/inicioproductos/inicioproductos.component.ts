import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Producto } from 'src/app/models/productos.model';
import { TareaslibresService } from 'src/app/services/tareaslibres.service';

@Component({
  selector: 'app-inicioproductos',
  templateUrl: './inicioproductos.component.html',
  styleUrls: ['./inicioproductos.component.scss'],
  providers: [TareaslibresService]
})
export class InicioproductosComponent implements OnInit {
  public buscar;
  public campoBusqueda: string = 'nombreProducto';

  public ProductoModelGet: Producto;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private _tareaslibresService: TareaslibresService,
    private titleService: Title

  ) {
    this.titleService.setTitle('Inicio');

   }


  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      console.log(dataRuta.get('idSucursal'));

      this.getProductosPorSucursal(dataRuta.get('idSucursal'))
      // this.getProductosSucursales();

    })
  }


  getProductosPorSucursal(id){
    this._tareaslibresService.obtenerProductosPorIdSucursalSinToken(id).subscribe(
      (response)=>{
        this.ProductoModelGet = response.productos;
        console.log(this.ProductoModelGet);
      },(error)=>{
        console.log(<any>error);
      }
    )
  }


}
