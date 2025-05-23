import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vistarolrepartidor',
  templateUrl: './vistarolrepartidor.component.html',
  styleUrls: ['./vistarolrepartidor.component.scss']
})
export class VistarolrepartidorComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('ROL REPARTIDOR');
  }

  ngOnInit(): void {
  }

}
