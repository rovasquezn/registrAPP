import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { DocentesService } from 'src/app/services/docentes.service';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.page.html',
  styleUrls: ['./docentes.page.scss'],
})
export class DocentesPage implements OnInit {

  listaDocentes : any;

  constructor(
    private docenteService: DocentesService,
    public navCtrl: NavController,
    public alertController : AlertController
    ) { 
    this.listarDocente();
  }
 
  listarDocente(){
    this.docenteService.obtenerListadoDocentes()
    .then(data => {
      console.log(data[''])
      this.listaDocentes = data;
    },
    (error) => {
      console.error(error)}
    );
  };

  goToDetalles(docente: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
          docente: JSON.stringify(docente)
      }
    };
  this.navCtrl.navigateForward(['detalle-docente/'], navigationExtras);
  };

  ngOnInit() {
  }

}
