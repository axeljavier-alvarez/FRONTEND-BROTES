import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vistarolcajero',
  templateUrl: './vistarolcajero.component.html',
  styleUrls: ['./vistarolcajero.component.scss']
})
export class VistarolcajeroComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('ROL CAJERO');
  }

  ngOnInit(): void {
  }

}
