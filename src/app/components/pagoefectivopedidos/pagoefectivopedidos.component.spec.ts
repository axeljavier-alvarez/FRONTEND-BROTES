import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoefectivopedidosComponent } from './pagoefectivopedidos.component';

describe('PagoefectivopedidosComponent', () => {
  let component: PagoefectivopedidosComponent;
  let fixture: ComponentFixture<PagoefectivopedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagoefectivopedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagoefectivopedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
