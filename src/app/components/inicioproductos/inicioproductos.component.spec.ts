import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioproductosComponent } from './inicioproductos.component';

describe('InicioproductosComponent', () => {
  let component: InicioproductosComponent;
  let fixture: ComponentFixture<InicioproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioproductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
