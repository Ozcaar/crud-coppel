import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Articulo } from '../Model/Articulo';
import { Departamento } from '../Model/Departamento'
import { Clase } from '../Model/Clase'
import { Familia } from '../Model/Familia'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/crud01/articulos';
  urlDep = 'http://localhost:8080/crud01/departamentos';
  urlCla = 'http://localhost:8080/crud01/clases';
  urlFam = 'http://localhost:8080/crud01/familias';

  getArticulo() {
    return this.http.get<Articulo[]>(this.url);
  }

  createArticulo(articulo:Articulo) {
    return this.http.post<Articulo[]>(this.url,articulo);
  }

  getArticuloId(sku:number) {
    return this.http.get<Articulo[]>(this.url+"/"+sku);
  }

  updateArticulo(articulo:Articulo, sku:number) {  
    return this.http.put<Articulo[]>(this.url+"/"+sku,articulo);
  }

  deleteArticulo(sku:number) {
    return this.http.delete<Articulo[]>(this.url+"/"+sku);
  }
  
  //-------------------------------//
  
  getDepartamentos() {
    return this.http.get<Departamento[]>(this.urlDep);
  }
  
  getClases(dep:number) {
    return this.http.get<Clase[]>(this.urlCla+"/"+dep);
  }
  
  getFamilias(dep:number, cla:number) {
    return this.http.get<Familia[]>(this.urlFam+"/"+dep+"/"+cla);
  }
}
