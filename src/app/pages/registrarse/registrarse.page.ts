import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataserviceService } from 'src/app/servicios/dataservice.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  usuario = { 
    nombre: "",
    password:""
  }

  datos: FormGroup;

  constructor(private data:DataserviceService, public FormBuilder: FormBuilder, public alertController: AlertController, public navCtrl: NavController, public router: Router ) {


    this.datos =this.FormBuilder.group ({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10) 
      ]))
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    this.data.disparador.emit(this.usuario.nombre)
  }
  async registroUsuario(){
    var f = this.datos.value;

    if(this.datos.invalid){

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
      this.navCtrl.navigateRoot('login');
    }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}
