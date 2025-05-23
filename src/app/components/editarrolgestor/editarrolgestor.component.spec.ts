import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrolgestorComponent } from './editarrolgestor.component';

describe('EditarrolgestorComponent', () => {
  let component: EditarrolgestorComponent;
  let fixture: ComponentFixture<EditarrolgestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarrolgestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarrolgestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
