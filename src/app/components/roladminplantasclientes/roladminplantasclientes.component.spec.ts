import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoladminplantasclientesComponent } from './roladminplantasclientes.component';

describe('RoladminplantasclientesComponent', () => {
  let component: RoladminplantasclientesComponent;
  let fixture: ComponentFixture<RoladminplantasclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoladminplantasclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoladminplantasclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
