import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistarolcajeroComponent } from './vistarolcajero.component';

describe('VistarolcajeroComponent', () => {
  let component: VistarolcajeroComponent;
  let fixture: ComponentFixture<VistarolcajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistarolcajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistarolcajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
