import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  //definir url de la api obteniendola de environment.ts (no de prod.ts)
  urlBase = environment.apiURL+'users/';

  // constructor ya existia vacio constructor(){}, crear una instancia de tipo httpclient
  constructor(private http: HttpClient) { }

  //metodo para consumir la api   users
  getAll(): Observable<string>{
    const url = this.urlBase;

    return this.http.get<string>(url); //<string> es muy importante, sino se queda como mal escrito
  }
}
