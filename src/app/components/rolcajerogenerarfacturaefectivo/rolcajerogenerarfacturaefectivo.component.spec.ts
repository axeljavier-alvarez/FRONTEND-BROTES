import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolcajerogenerarfacturaefectivoComponent } from './rolcajerogenerarfacturaefectivo.component';

describe('RolcajerogenerarfacturaefectivoComponent', () => {
  let component: RolcajerogenerarfacturaefectivoComponent;
  let fixture: ComponentFixture<RolcajerogenerarfacturaefectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolcajerogenerarfacturaefectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolcajerogenerarfacturaefectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
