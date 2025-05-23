import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ClienteUsuarioService } from 'src/app/services/cliente-usuario.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'; // Esta línea está bien

@Component({
  selector: 'app-rolclienteverfactura',
  templateUrl: './rolclienteverfactura.component.html',
  styleUrls: ['./rolclienteverfactura.component.scss'],
  providers: [UsuarioService, ClienteUsuarioService]
})
export class RolclienteverfacturaComponent implements OnInit {

  public token: string;
  public idPedido: string;
  public FacturaModelGet: Factura;

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _clienteUsuarioService: ClienteUsuarioService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Ver factura');
    this.token = this._usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idPedido = dataRuta.get('idPedido');
      if (this.idPedido) {
        this.getFacturasPorPedido(this.idPedido, this.token);
      }
      console.log(this.idPedido);
    });
  }

  getFacturasPorPedido(idPedido: string, token: string) {
    this._clienteUsuarioService
      .obtenerFacturasPorPedido(idPedido, token)
      .subscribe(
        (response) => {
          this.FacturaModelGet = response.facturas;
          console.log(this.FacturaModelGet);
        },
        (error) => {
          console.log(<any>error);
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
