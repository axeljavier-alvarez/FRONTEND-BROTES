import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolfacturadorversucursalesComponent } from './rolfacturadorversucursales.component';

describe('RolfacturadorversucursalesComponent', () => {
  let component: RolfacturadorversucursalesComponent;
  let fixture: ComponentFixture<RolfacturadorversucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolfacturadorversucursalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolfacturadorversucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
