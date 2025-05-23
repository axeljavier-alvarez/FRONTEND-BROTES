import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolfacturadorvercajaComponent } from './rolfacturadorvercaja.component';

describe('RolfacturadorvercajaComponent', () => {
  let component: RolfacturadorvercajaComponent;
  let fixture: ComponentFixture<RolfacturadorvercajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolfacturadorvercajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolfacturadorvercajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
