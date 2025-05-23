import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajeroverpedidosentregadosComponent } from './rolcajeroverpedidosentregados.component';

describe('RolcajeroverpedidosentregadosComponent', () => {
  let component: RolcajeroverpedidosentregadosComponent;
  let fixture: ComponentFixture<RolcajeroverpedidosentregadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajeroverpedidosentregadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajeroverpedidosentregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
