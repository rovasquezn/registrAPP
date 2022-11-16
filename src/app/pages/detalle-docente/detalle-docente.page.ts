import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-docente',
  templateUrl: './detalle-docente.page.html',
  styleUrls: ['./detalle-docente.page.scss'],
})
export class DetalleDocentePage implements OnInit {

  docente = null;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
        this.docente = JSON.parse(params.docente);
    });
  }

  ngOnInit() {
    console.log(this.docente);
    
  }

}
