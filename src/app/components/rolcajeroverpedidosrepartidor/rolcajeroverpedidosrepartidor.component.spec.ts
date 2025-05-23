import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajeroverpedidosrepartidorComponent } from './rolcajeroverpedidosrepartidor.component';

describe('RolcajeroverpedidosrepartidorComponent', () => {
  let component: RolcajeroverpedidosrepartidorComponent;
  let fixture: ComponentFixture<RolcajeroverpedidosrepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajeroverpedidosrepartidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajeroverpedidosrepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
