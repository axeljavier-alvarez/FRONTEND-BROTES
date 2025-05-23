import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFacturadorComponent } from './inicio-facturador.component';

describe('InicioFacturadorComponent', () => {
  let component: InicioFacturadorComponent;
  let fixture: ComponentFixture<InicioFacturadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioFacturadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioFacturadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
