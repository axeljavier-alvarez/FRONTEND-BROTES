import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrolcajeroComponent } from './editarrolcajero.component';

describe('EditarrolcajeroComponent', () => {
  let component: EditarrolcajeroComponent;
  let fixture: ComponentFixture<EditarrolcajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarrolcajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarrolcajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
