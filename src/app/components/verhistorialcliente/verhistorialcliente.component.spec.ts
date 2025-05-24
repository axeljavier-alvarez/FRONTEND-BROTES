import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerhistorialclienteComponent } from './verhistorialcliente.component';

describe('VerhistorialclienteComponent', () => {
  let component: VerhistorialclienteComponent;
  let fixture: ComponentFixture<VerhistorialclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerhistorialclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerhistorialclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
