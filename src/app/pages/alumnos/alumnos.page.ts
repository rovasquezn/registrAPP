import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { AlumnosService } from 'src/app/services/alumnos.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  listaAlumnos : any;

  constructor(
    private alumnoService: AlumnosService,
    public navCtrl: NavController,
    public alertController : AlertController
    ) { 
    this.listarAlumno();
  }
 
  listarAlumno(){
    this.alumnoService.obtenerListadoAlumnos()
    .then(data => {
      console.log(data[''])
      this.listaAlumnos = data;
    },
    (error) => {
      console.error(error)}
    );
  };

  goToDetalles(alumn: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          alumn: JSON.stringify(alumn)
      }
    };
  this.navCtrl.navigateForward(['detalle-alumno/'], navigationExtras);
  };

  ngOnInit() {
  }

}
