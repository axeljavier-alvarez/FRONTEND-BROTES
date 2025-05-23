import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualgestorComponent } from './manualgestor.component';

describe('ManualgestorComponent', () => {
  let component: ManualgestorComponent;
  let fixture: ComponentFixture<ManualgestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualgestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualgestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
