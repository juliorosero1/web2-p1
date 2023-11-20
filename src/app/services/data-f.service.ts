import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Datos } from '../model/datos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataFService {

  constructor(private http: HttpClient) { }

  //private API_FIRE = "https://dataweb-5e00f-default-rtdb.firebaseio.com/productos.json"


  private API_FIRE = "http://localhost:8080/lista/autores2"

  getProducto():Observable<any>{
    return this.http.get(this.API_FIRE)
  }

  postProducto(producto: any):Observable<any>{
    return this.http.post(this.API_FIRE, producto)
  }
 }
