import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/servicios/dataservice.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombreUsuario: string;

  constructor(private data:DataserviceService, private router:Router, public toastController:ToastController) {

  }


  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000,
    });
    toast.present();
  }


logout() {
    this.router.navigate(['/menu']);
    this.presentToast('Sesion de Alumnos cerrada exitosamente');
  }


  ngOnInit() {
    this.data.disparador.subscribe(info => {
      console.log(info)
      this.nombreUsuario = info
     })

  }


}
