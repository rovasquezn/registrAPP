import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataserviceService } from 'src/app/servicios/dataservice.service';


@Component({
  selector: 'app-registrarsedocentes',
  templateUrl: './registrarsedocentes.page.html',
  styleUrls: ['./registrarsedocentes.page.scss'],
})
export class RegistrarsedocentesPage implements OnInit {

  usuarioDocente = { 
    nombreDocente: "",
    passwordDocente:""
  }

  datosDocente: FormGroup;

  constructor(private data:DataserviceService, public FormBuilder: FormBuilder, public alertController: AlertController, public navCtrl: NavController, public router: Router ) {


    this.datosDocente =this.FormBuilder.group ({
      nombreDocente: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ])),

      passwordDocente: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10) 
      ]))
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    this.data.disparador.emit(this.usuarioDocente.nombreDocente)
  }
  async registroUsuarioDocente(){
    var f = this.datosDocente.value;

    if(this.datosDocente.invalid){

      const alert = await this.alertController.create({
        header: 'Aviso',
        message: 'Falta completar algunos datos',
        buttons: ['Aceptar']
      });
    
      await alert.present();
      return;
    }else{
      const alerta = await this.alertController.create({
        header: 'Perfecto',
        message: 'Los datos han sido ingresados correctamente',
        buttons: ['Aceptar']
      });
      await alerta.present();
      this.navCtrl.navigateRoot('logindocentes');
    }

    var usuarioDocente = {
      nombreDocente: f.nombreDocente,
      passwordDocente: f.passwordDocente
    }

    localStorage.setItem('usuarioDocente',JSON.stringify(usuarioDocente));
  }


}
