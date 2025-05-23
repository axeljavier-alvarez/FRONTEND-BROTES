import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpedidossinconfirmarefectivoComponent } from './verpedidossinconfirmarefectivo.component';

describe('VerpedidossinconfirmarefectivoComponent', () => {
  let component: VerpedidossinconfirmarefectivoComponent;
  let fixture: ComponentFixture<VerpedidossinconfirmarefectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpedidossinconfirmarefectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpedidossinconfirmarefectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
