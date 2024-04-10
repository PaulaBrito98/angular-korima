import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos() {
    return [
      {
        id: 1,
        nombre: 'matematicas 1',
        descripcion: 'curso',
        duracion: 1,
        instructor: 'David',
        nivel: 'basico',
      }, {
        id: 1,
        nombre: 'matematicas 2',
        descripcion: 'curso',
        duracion: 2,
        instructor: 'Jose',
        nivel: 'intermedio',
      }, {
        id: 1,
        nombre: 'matematicas 3',
        descripcion: 'curso',
        duracion: 3,
        instructor: 'Luis',
        nivel: 'avanzado',
      }
    ]
  }
  getCursosMini() {
    return Promise.resolve(this.getCursos());
  }
  save(curso:any){
    console.log(curso);
  }
}

