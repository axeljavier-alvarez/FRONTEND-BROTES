import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manualusuario',
  templateUrl: './manualusuario.component.html',
  styleUrls: ['./manualusuario.component.scss']
})
export class ManualusuarioComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle('Manual de usuario');
  }

  ngOnInit(): void {
  }

}
