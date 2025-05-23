import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FacturadorService } from 'src/app/services/facturador.service';
import { Usuario } from 'src/app/models/usuarios.model';
import { Factura } from 'src/app/models/factura.model';
import { Title } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-rolfacturadorfacturaselectronicas',
  templateUrl: './rolfacturadorfacturaselectronicas.component.html',
  styleUrls: ['./rolfacturadorfacturaselectronicas.component.scss'],
  providers: [UsuarioService, FacturadorService]
})
export class RolfacturadorfacturaselectronicasComponent implements OnInit {

  public token: string;
  public idSucursal: string;
  public FacturaModelGet: Factura;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _facturadorService: FacturadorService
  ) {
    this.titleService.setTitle('Facturas electronicas');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.idSucursal = localStorage.getItem('idSucursal');
      if (this.idSucursal) {
        this.getFacturaCredito(this.idSucursal, this.token);
      }
    });
  }


  getFacturaCredito( idSucursal: string, token: string) {
    this._facturadorService
      .verFacturaCredito(idSucursal, token)
      .subscribe(
        (response) => {
          this.FacturaModelGet = response.facturas; // Asignar los productos a la variable
          console.log(this.FacturaModelGet); // Verifica la respuesta
        },
        (error) => {
          console.log(<any>error); // Manejo de errores
        }
      );
  }



  imprimirPDF() {
    const data = document.getElementById('content'); // Cambia 'content' por el ID del contenedor que quieres imprimir
    if (data) {
      html2canvas(data).then((canvas) => {
        console.log('Canvas creado', canvas);

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgWidth = 190; // Ajusta el ancho del PDF
        const pageHeight = pdf.internal.pageSize.height;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save('factura.pdf');
      });
    }
  }
  

}
