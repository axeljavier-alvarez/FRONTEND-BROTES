import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolfacturadoradmincajaComponent } from './rolfacturadoradmincaja.component';

describe('RolfacturadoradmincajaComponent', () => {
  let component: RolfacturadoradmincajaComponent;
  let fixture: ComponentFixture<RolfacturadoradmincajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolfacturadoradmincajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolfacturadoradmincajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
