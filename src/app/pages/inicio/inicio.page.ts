import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/servicios/dataservice.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombreUsuario: string;

  constructor(private data:DataserviceService) { 

  }


  ngOnInit() {
    this.data.disparador.subscribe(info => {
      console.log(info)
      this.nombreUsuario = info
     })

  }

}
