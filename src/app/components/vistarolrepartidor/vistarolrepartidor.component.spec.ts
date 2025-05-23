import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistarolrepartidorComponent } from './vistarolrepartidor.component';

describe('VistarolrepartidorComponent', () => {
  let component: VistarolrepartidorComponent;
  let fixture: ComponentFixture<VistarolrepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistarolrepartidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistarolrepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
