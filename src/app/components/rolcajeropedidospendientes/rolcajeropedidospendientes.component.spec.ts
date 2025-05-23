import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajeropedidospendientesComponent } from './rolcajeropedidospendientes.component';

describe('RolcajeropedidospendientesComponent', () => {
  let component: RolcajeropedidospendientesComponent;
  let fixture: ComponentFixture<RolcajeropedidospendientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajeropedidospendientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajeropedidospendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
