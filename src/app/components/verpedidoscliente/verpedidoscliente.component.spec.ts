import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpedidosclienteComponent } from './verpedidoscliente.component';

describe('VerpedidosclienteComponent', () => {
  let component: VerpedidosclienteComponent;
  let fixture: ComponentFixture<VerpedidosclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpedidosclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpedidosclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
