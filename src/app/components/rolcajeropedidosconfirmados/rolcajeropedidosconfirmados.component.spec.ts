import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajeropedidosconfirmadosComponent } from './rolcajeropedidosconfirmados.component';

describe('RolcajeropedidosconfirmadosComponent', () => {
  let component: RolcajeropedidosconfirmadosComponent;
  let fixture: ComponentFixture<RolcajeropedidosconfirmadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajeropedidosconfirmadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajeropedidosconfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
