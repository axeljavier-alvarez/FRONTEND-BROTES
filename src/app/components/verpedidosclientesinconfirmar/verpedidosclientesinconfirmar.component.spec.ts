import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerpedidosclientesinconfirmarComponent } from './verpedidosclientesinconfirmar.component';

describe('VerpedidosclientesinconfirmarComponent', () => {
  let component: VerpedidosclientesinconfirmarComponent;
  let fixture: ComponentFixture<VerpedidosclientesinconfirmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerpedidosclientesinconfirmarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerpedidosclientesinconfirmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
