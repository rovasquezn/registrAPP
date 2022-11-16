import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataserviceService } from 'src/app/servicios/dataservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logindocentes',
  templateUrl: './logindocentes.page.html',
  styleUrls: ['./logindocentes.page.scss'],
})
export class LogindocentesPage implements OnInit {

  usuarioDocente = { 
    nombreDocente: "",
    passwordDocente:""
  }

  formDocente: FormGroup;

  constructor(public loadingController: LoadingController, 
    private data:DataserviceService, 
    private FormBuilder: FormBuilder, 
    private alertController: AlertController, 
    public navCtrl: NavController, private router: Router) {


      this.formDocente = this.FormBuilder.group ({
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
    
      async loginUsuarioDocente(){
        var f = this.formDocente.value;
    
        var usuarioDocente = JSON.parse(localStorage.getItem('usuarioDocente'));
    
        if(usuarioDocente.nombreDocente == f.nombreDocente && usuarioDocente.passwordDocente == f.passwordDocente){
          console.log('Ingresado');
          localStorage.setItem('Docente ingresado','true');
          this.navCtrl.navigateRoot('iniciodocentes');
         
          
        }
        else{
          this.router.navigate(['/logindocentes']);
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'El usuario ingresado no esta registrado como docente, o alguno de los datos no coincide',
            buttons: ['Aceptar']
            
          });
      
          await alert.present();
        }
      
    }

  onSubmit(){
    this.data.disparador.emit(this.usuarioDocente.nombreDocente)
  }
}

 
