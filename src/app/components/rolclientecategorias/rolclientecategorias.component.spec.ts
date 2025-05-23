import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolclientecategoriasComponent } from './rolclientecategorias.component';

describe('RolclientecategoriasComponent', () => {
  let component: RolclientecategoriasComponent;
  let fixture: ComponentFixture<RolclientecategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolclientecategoriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolclientecategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
