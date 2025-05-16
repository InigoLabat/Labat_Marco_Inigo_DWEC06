import { Injectable } from '@angular/core';
import { Atleta } from '../models/atleta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  public atletasListado: Array<Atleta> = [];

  public url: string = 'https://6823ac0165ba058033978c4e.mockapi.io/DWEC06/athletes';

  constructor( public _http: HttpClient) {  }

  getAll(): Observable<Atleta[]>{
    return this._http.get<Atleta[]>(this.url);
  }

  getById(id: string): Observable<Atleta> {
    return this._http.get<Atleta>(this.url + '/' + id);
  }

  createAthlete(atleta: Atleta): Observable<Atleta> {
    return this._http.post<Atleta>(this.url, atleta);
  }

  updateAthlete(id: string, atleta: Atleta): Observable<Atleta> {
    return this._http.put<Atleta>(this.url + '/' + id, atleta);
  }

  deteleAthlete(id: string): Observable<void> {
    return this._http.delete<void>(this.url + '/' + id);
  }
}
