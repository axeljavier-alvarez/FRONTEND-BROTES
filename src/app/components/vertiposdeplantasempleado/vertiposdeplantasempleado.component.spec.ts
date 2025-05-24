import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertiposdeplantasempleadoComponent } from './vertiposdeplantasempleado.component';

describe('VertiposdeplantasempleadoComponent', () => {
  let component: VertiposdeplantasempleadoComponent;
  let fixture: ComponentFixture<VertiposdeplantasempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VertiposdeplantasempleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertiposdeplantasempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
