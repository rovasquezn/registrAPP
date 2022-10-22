import { Component, OnInit } from '@angular/core';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  constructor(private alumnoService: AlumnosService) { 
    this.listarAlumnos();
  }

  listarAlumnos(){
    this.alumnoService.obtenerListadoAlumnos()
    .then(data => {
      console.log(data['data'])
    },
    (error) =>
      console.error(error)
    );
  }

  ngOnInit() {
  }

}
