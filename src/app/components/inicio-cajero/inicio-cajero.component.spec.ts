import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioCajeroComponent } from './inicio-cajero.component';

describe('InicioCajeroComponent', () => {
  let component: InicioCajeroComponent;
  let fixture: ComponentFixture<InicioCajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioCajeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
