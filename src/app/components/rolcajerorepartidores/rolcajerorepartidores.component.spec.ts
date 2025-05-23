import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajerorepartidoresComponent } from './rolcajerorepartidores.component';

describe('RolcajerorepartidoresComponent', () => {
  let component: RolcajerorepartidoresComponent;
  let fixture: ComponentFixture<RolcajerorepartidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajerorepartidoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajerorepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
