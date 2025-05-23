import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolrepartidortareasComponent } from './rolrepartidortareas.component';

describe('RolrepartidortareasComponent', () => {
  let component: RolrepartidortareasComponent;
  let fixture: ComponentFixture<RolrepartidortareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolrepartidortareasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolrepartidortareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
