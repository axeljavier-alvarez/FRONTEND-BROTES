import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpedidosefectivoclienteComponent } from './verpedidosefectivocliente.component';

describe('VerpedidosefectivoclienteComponent', () => {
  let component: VerpedidosefectivoclienteComponent;
  let fixture: ComponentFixture<VerpedidosefectivoclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpedidosefectivoclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpedidosefectivoclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
