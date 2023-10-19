import { Component } from '@angular/core';
import { Student } from 'src/app/models/alumno.interface';

const Alumnos: Student[] = {
  id: '1',
  name: 'Paco',
  lastname: 'Pepe',
  sexo: 'H',
  edad: 60,
  modulos: [
    {
      nombre: 'HTML',
      horas: 20
    }
  ]
}



@Component({
  selector: 'app-alumntos',
  templateUrl: './alumntos.component.html',
  styleUrls: ['./alumntos.component.css']
})
export class AlumntosComponent {

}
