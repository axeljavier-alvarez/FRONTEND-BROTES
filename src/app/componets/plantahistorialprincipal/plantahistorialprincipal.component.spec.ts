import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantahistorialprincipalComponent } from './plantahistorialprincipal.component';

describe('PlantahistorialprincipalComponent', () => {
  let component: PlantahistorialprincipalComponent;
  let fixture: ComponentFixture<PlantahistorialprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantahistorialprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantahistorialprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
