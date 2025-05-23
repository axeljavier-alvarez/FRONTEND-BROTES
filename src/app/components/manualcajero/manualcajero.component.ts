import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manualcajero',
  templateUrl: './manualcajero.component.html',
  styleUrls: ['./manualcajero.component.scss']
})
export class ManualcajeroComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle('Manual de cajero');
  }

  ngOnInit(): void {
  }

}
