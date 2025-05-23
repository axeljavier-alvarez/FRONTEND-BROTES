import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagocreditopedidosComponent } from './pagocreditopedidos.component';

describe('PagocreditopedidosComponent', () => {
  let component: PagocreditopedidosComponent;
  let fixture: ComponentFixture<PagocreditopedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagocreditopedidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagocreditopedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
