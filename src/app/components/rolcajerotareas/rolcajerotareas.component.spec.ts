import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajerotareasComponent } from './rolcajerotareas.component';

describe('RolcajerotareasComponent', () => {
  let component: RolcajerotareasComponent;
  let fixture: ComponentFixture<RolcajerotareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajerotareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajerotareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
