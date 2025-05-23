import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolrepartidorversucursalesComponent } from './rolrepartidorversucursales.component';

describe('RolrepartidorversucursalesComponent', () => {
  let component: RolrepartidorversucursalesComponent;
  let fixture: ComponentFixture<RolrepartidorversucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolrepartidorversucursalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolrepartidorversucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
