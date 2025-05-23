import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajeroefectivopedidosconfirmadosComponent } from './rolcajeroefectivopedidosconfirmados.component';

describe('RolcajeroefectivopedidosconfirmadosComponent', () => {
  let component: RolcajeroefectivopedidosconfirmadosComponent;
  let fixture: ComponentFixture<RolcajeroefectivopedidosconfirmadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajeroefectivopedidosconfirmadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajeroefectivopedidosconfirmadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
