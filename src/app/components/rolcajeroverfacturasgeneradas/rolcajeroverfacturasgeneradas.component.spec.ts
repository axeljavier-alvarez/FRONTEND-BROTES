import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajeroverfacturasgeneradasComponent } from './rolcajeroverfacturasgeneradas.component';

describe('RolcajeroverfacturasgeneradasComponent', () => {
  let component: RolcajeroverfacturasgeneradasComponent;
  let fixture: ComponentFixture<RolcajeroverfacturasgeneradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajeroverfacturasgeneradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajeroverfacturasgeneradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
