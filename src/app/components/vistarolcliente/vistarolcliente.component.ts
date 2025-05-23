import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vistarolcliente',
  templateUrl: './vistarolcliente.component.html',
  styleUrls: ['./vistarolcliente.component.scss']
})
export class VistarolclienteComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('ROL CLIENTE');
  }

  ngOnInit(): void {
  }

}
