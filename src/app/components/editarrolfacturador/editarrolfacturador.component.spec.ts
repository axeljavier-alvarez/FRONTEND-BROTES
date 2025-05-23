import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarrolfacturadorComponent } from './editarrolfacturador.component';

describe('EditarrolfacturadorComponent', () => {
  let component: EditarrolfacturadorComponent;
  let fixture: ComponentFixture<EditarrolfacturadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarrolfacturadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarrolfacturadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
