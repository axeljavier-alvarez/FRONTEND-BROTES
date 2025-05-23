import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualcajeroComponent } from './manualcajero.component';

describe('ManualcajeroComponent', () => {
  let component: ManualcajeroComponent;
  let fixture: ComponentFixture<ManualcajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualcajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualcajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
