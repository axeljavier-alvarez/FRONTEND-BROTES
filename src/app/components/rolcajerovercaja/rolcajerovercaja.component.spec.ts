import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajerovercajaComponent } from './rolcajerovercaja.component';

describe('RolcajerovercajaComponent', () => {
  let component: RolcajerovercajaComponent;
  let fixture: ComponentFixture<RolcajerovercajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajerovercajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajerovercajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
