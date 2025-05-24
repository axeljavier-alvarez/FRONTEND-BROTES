import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialclienteadminComponent } from './historialclienteadmin.component';

describe('HistorialclienteadminComponent', () => {
  let component: HistorialclienteadminComponent;
  let fixture: ComponentFixture<HistorialclienteadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistorialclienteadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialclienteadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
