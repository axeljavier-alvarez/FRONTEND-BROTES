import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualadminComponent } from './manualadmin.component';

describe('ManualadminComponent', () => {
  let component: ManualadminComponent;
  let fixture: ComponentFixture<ManualadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
