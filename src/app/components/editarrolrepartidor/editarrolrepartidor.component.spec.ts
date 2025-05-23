import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrolrepartidorComponent } from './editarrolrepartidor.component';

describe('EditarrolrepartidorComponent', () => {
  let component: EditarrolrepartidorComponent;
  let fixture: ComponentFixture<EditarrolrepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarrolrepartidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarrolrepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
