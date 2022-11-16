import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor(private storage: Storage, private sqlite: SQLite) { 

  }
}
