import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-roladminusuarios',
  templateUrl: './roladminusuarios.component.html',
  styleUrls: ['./roladminusuarios.component.scss']
})
export class RoladminusuariosComponent implements OnInit {

  constructor(
    private titleService: Title

  ) {
    this.titleService.setTitle('Usuarios');
  }

  ngOnInit(): void {
  }

}
