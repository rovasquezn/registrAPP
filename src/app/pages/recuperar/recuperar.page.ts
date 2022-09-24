import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  email: "";

  constructor(private toasCtrl: ToastController){

   }


  ngOnInit() {
  }
  
 

  async onSubmit(position: 'middle') {
    const toast = await this.toasCtrl.create({
      message: 'Contrasena enviada a su mail',
      duration: 2000,
      position: 'top'
    });

    await toast.present();
  }

}
