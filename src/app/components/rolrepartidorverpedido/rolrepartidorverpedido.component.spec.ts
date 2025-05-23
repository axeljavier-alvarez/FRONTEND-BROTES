import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolrepartidorverpedidoComponent } from './rolrepartidorverpedido.component';

describe('RolrepartidorverpedidoComponent', () => {
  let component: RolrepartidorverpedidoComponent;
  let fixture: ComponentFixture<RolrepartidorverpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolrepartidorverpedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolrepartidorverpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
