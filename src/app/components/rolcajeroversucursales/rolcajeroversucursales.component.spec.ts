import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajeroversucursalesComponent } from './rolcajeroversucursales.component';

describe('RolcajeroversucursalesComponent', () => {
  let component: RolcajeroversucursalesComponent;
  let fixture: ComponentFixture<RolcajeroversucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajeroversucursalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajeroversucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
