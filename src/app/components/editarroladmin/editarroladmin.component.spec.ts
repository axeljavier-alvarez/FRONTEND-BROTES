import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarroladminComponent } from './editarroladmin.component';

describe('EditarroladminComponent', () => {
  let component: EditarroladminComponent;
  let fixture: ComponentFixture<EditarroladminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarroladminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarroladminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
