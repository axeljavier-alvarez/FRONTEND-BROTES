import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolgestorinventarioproductosComponent } from './rolgestorinventarioproductos.component';

describe('RolgestorinventarioproductosComponent', () => {
  let component: RolgestorinventarioproductosComponent;
  let fixture: ComponentFixture<RolgestorinventarioproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolgestorinventarioproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolgestorinventarioproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
