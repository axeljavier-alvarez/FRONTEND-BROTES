import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolfacturadortareasComponent } from './rolfacturadortareas.component';

describe('RolfacturadortareasComponent', () => {
  let component: RolfacturadortareasComponent;
  let fixture: ComponentFixture<RolfacturadortareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolfacturadortareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolfacturadortareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
