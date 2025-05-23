import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolclienteverfacturaComponent } from './rolclienteverfactura.component';

describe('RolclienteverfacturaComponent', () => {
  let component: RolclienteverfacturaComponent;
  let fixture: ComponentFixture<RolclienteverfacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolclienteverfacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolclienteverfacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
