import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantahistorialadminComponent } from './plantahistorialadmin.component';

describe('PlantahistorialadminComponent', () => {
  let component: PlantahistorialadminComponent;
  let fixture: ComponentFixture<PlantahistorialadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantahistorialadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantahistorialadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
