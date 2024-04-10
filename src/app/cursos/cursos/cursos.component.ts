import {Component, OnInit} from '@angular/core';
import {CursosService} from "../cursos.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

interface Cursos {
  id?: number;
  nombre?: string;
  descripcion?: string;
  duracion?: number;
  instructor?: string;
  nivel?: string;
}
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos!: Cursos[];
  formularioCursos: FormGroup;
  constructor(private cursosService: CursosService, private formBuilder: FormBuilder) {
    this.formularioCursos= this.formBuilder.group({
      nombre:['', Validators.required],
      descripcion:['', Validators.required],
      duracion:['', Validators.required],
      instructor:['', Validators.required],
      nivel:['', Validators.required]
    })
  }
  SaveDataCursos(){
    if(this.formularioCursos.valid){
      this.cursosService.save(this.formularioCursos)
      alert('guardado')
    }else{

    }
  }
  ngOnInit() {
    this.cursosService.getCursosMini().then((data)=>
      this.cursos=data);

}
}
