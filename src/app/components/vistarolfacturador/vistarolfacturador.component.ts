import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vistarolfacturador',
  templateUrl: './vistarolfacturador.component.html',
  styleUrls: ['./vistarolfacturador.component.scss']
})
export class VistarolfacturadorComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('ROL FACTURADOR');
  }

  ngOnInit(): void {
  }

}
