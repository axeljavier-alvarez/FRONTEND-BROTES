import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolfacturadorfacturaselectronicasComponent } from './rolfacturadorfacturaselectronicas.component';

describe('RolfacturadorfacturaselectronicasComponent', () => {
  let component: RolfacturadorfacturaselectronicasComponent;
  let fixture: ComponentFixture<RolfacturadorfacturaselectronicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolfacturadorfacturaselectronicasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolfacturadorfacturaselectronicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
