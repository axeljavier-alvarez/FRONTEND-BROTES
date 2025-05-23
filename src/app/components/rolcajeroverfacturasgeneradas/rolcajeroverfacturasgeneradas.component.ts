import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CajeroService } from 'src/app/services/cajero.service';
import { Usuario } from 'src/app/models/usuarios.model';
import { Factura } from 'src/app/models/factura.model';
import { Title } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Esta línea está bien

@Component({
  selector: 'app-rolcajeroverfacturasgeneradas',
  templateUrl: './rolcajeroverfacturasgeneradas.component.html',
  styleUrls: ['./rolcajeroverfacturasgeneradas.component.scss'],
  providers: [UsuarioService, CajeroService]

})
export class RolcajeroverfacturasgeneradasComponent implements OnInit {

  public token: string;
  public idSucursal: string;
  public FacturaModelGet: Factura;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _usuarioService: UsuarioService,
    private _cajeroService: CajeroService
  ) {
    this.titleService.setTitle('Facturas efectivo');
    this.token = this._usuarioService.obtenerToken();
   }


   ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(() => {
      this.idSucursal = localStorage.getItem('idSucursal');
      if (this.idSucursal) {
        this.getFacturasPorIdSucursal(this.idSucursal, this.token);
      }
    });
  }



  getFacturasPorIdSucursal( idSucursal: string, token: string) {
    this._cajeroService
      .obtenerFacturasPorIdSucursal(idSucursal, token)
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

  imprimirPDF(facturaId: string) {
    const data = document.getElementById(`factura-${facturaId}`);
    if (data) {
        html2canvas(data).then((canvas) => {
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

            pdf.save(`factura-${facturaId}.pdf`);
        });
    }
}

}
