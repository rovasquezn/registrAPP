import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocentesService { urlBase= "https://apidocentes-default-rtdb.firebaseio.com/docentes.json";




constructor(private httpCliente: HttpClient) { }

// GET
obtenerListadoDocentes(): Promise <any> {
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
