import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  urlBase= "https://apialumnos-5d620-default-rtdb.firebaseio.com/alumnos.json";



  constructor(private httpCliente: HttpClient) { }

 // GET
obtenerListadoAlumnos(): Promise <any> {
  return new Promise ((resolve,reject) => {
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
