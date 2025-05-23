import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolfacturadorverfacturasefectivoComponent } from './rolfacturadorverfacturasefectivo.component';

describe('RolfacturadorverfacturasefectivoComponent', () => {
  let component: RolfacturadorverfacturasefectivoComponent;
  let fixture: ComponentFixture<RolfacturadorverfacturasefectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolfacturadorverfacturasefectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolfacturadorverfacturasefectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
