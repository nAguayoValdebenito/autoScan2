import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoProfesorPage } from './alumno-profesor.page';

describe('AlumnoProfesorPage', () => {
  let component: AlumnoProfesorPage;
  let fixture: ComponentFixture<AlumnoProfesorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoProfesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
