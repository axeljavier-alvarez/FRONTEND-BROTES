import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolclienteplantasComponent } from './rolclienteplantas.component';

describe('RolclienteplantasComponent', () => {
  let component: RolclienteplantasComponent;
  let fixture: ComponentFixture<RolclienteplantasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolclienteplantasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolclienteplantasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
