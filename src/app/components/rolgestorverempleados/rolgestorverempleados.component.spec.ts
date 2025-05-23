import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolgestorverempleadosComponent } from './rolgestorverempleados.component';

describe('RolgestorverempleadosComponent', () => {
  let component: RolgestorverempleadosComponent;
  let fixture: ComponentFixture<RolgestorverempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolgestorverempleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolgestorverempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
