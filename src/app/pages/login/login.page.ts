import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { DataserviceService } from 'src/app/servicios/dataservice.service';
import { NavController } from '@ionic/angular';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario = { 
    nombre: "",
    password:""
  }

  form: FormGroup;

  constructor(public loadingController: LoadingController, 
    private data:DataserviceService, 
    private FormBuilder: FormBuilder, 
    private alertController: AlertController, 
    public navCtrl: NavController, private router: Router) {


      this.form = this.FormBuilder.group ({
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
    
      async loginUsuario(){
        var f = this.form.value;
    
        var usuario = JSON.parse(localStorage.getItem('usuario'));
    
        if(usuario.nombre == f.nombre && usuario.password == f.password){
          console.log('Ingresado');
          localStorage.setItem('Alumno ingresado','true');
          this.navCtrl.navigateRoot('inicio');
         
          
        }
        else{
          this.router.navigate(['/login']);
          const alert = await this.alertController.create({
            header: 'Datos incorrectos',
            message: 'El usuario ingresado no esta registrado como alumno, o alguno de los datos no coincide',
            buttons: ['Aceptar']
            
          });
      
          await alert.present();
        }
      
    }

  onSubmit(){
    this.data.disparador.emit(this.usuario.nombre)
  }

}
