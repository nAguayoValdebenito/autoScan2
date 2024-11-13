// agregar-asignatura.page.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-asignatura',
  templateUrl: './agregar-asignatura.page.html',
  styleUrls: ['./agregar-asignatura.page.scss'],
})
export class AgregarAsignaturaPage implements OnInit {
  asignaturaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.asignaturaForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      codigo: ['', Validators.required],
      descripcion: ['']
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.asignaturaForm.valid) {
      const nuevaAsignatura = this.asignaturaForm.value;
      console.log('Asignatura Guardada:', nuevaAsignatura);
      this.asignaturaForm.reset();  // Limpia el formulario después de guardar
    } else {
      console.log('Formulario inválido');
    }
  }
}
