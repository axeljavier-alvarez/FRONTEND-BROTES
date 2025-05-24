import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolgestorplantasComponent } from './rolgestorplantas.component';

describe('RolgestorplantasComponent', () => {
  let component: RolgestorplantasComponent;
  let fixture: ComponentFixture<RolgestorplantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolgestorplantasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolgestorplantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
