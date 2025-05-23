import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-manualadmin',
  templateUrl: './manualadmin.component.html',
  styleUrls: ['./manualadmin.component.scss']
})
export class ManualadminComponent implements OnInit {

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle('Manual de administrador');
  }

  ngOnInit(): void {
  }

}
