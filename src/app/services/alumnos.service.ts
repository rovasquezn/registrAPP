import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  urlBase= "https://intres.cl/duoc/bd2.json";


  constructor(private httpCliente:HttpClient) { }

 // GET
obtenerListadoAlumnos(): Promise <any> {
  return new Promise ((resolve,reject) =>{
    this.httpCliente.get(this.urlBase)
    .subscribe(res =>{
      resolve(res);
    }, (err) => {
      reject(err);
    }
    );
  }
  );
}
}
