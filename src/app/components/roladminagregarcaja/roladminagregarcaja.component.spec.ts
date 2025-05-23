import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladminagregarcajaComponent } from './roladminagregarcaja.component';

describe('RoladminagregarcajaComponent', () => {
  let component: RoladminagregarcajaComponent;
  let fixture: ComponentFixture<RoladminagregarcajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladminagregarcajaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoladminagregarcajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
