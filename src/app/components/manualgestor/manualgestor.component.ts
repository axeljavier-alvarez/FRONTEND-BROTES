import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manualgestor',
  templateUrl: './manualgestor.component.html',
  styleUrls: ['./manualgestor.component.scss']
})
export class ManualgestorComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) {
    this.titleService.setTitle('Manual de gestor');
  }

  ngOnInit(): void {
  }

}
