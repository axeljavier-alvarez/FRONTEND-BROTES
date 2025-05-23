import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrolclienteComponent } from './editarrolcliente.component';

describe('EditarrolclienteComponent', () => {
  let component: EditarrolclienteComponent;
  let fixture: ComponentFixture<EditarrolclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarrolclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarrolclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
