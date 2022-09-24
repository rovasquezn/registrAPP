import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/servicios/dataservice.service';
 
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

  constructor(private data:DataserviceService){

  }

  ngOnInit() {
  }

  onSubmit(){
    this.data.disparador.emit(this.usuario.nombre)
  }

}
