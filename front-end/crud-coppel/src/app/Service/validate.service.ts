import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validacion } from 'src/app/Model/Validacion';
import { Articulo } from '../Model/Articulo';
import { AltaComponent } from '../Pages/alta/alta.component';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  altaComponent!: AltaComponent;
  validacion!: Validacion;

  constructor(private http: HttpClient) { }

  validarEnviar(articulo: Articulo) {
    this.validacion = new Validacion();

    this.validacion.validSKU = this.validarCampo(articulo.sku);
    this.validacion.validNombre = this.validarCampo(articulo.nombre);
    this.validacion.validMarca = this.validarCampo(articulo.marca);
    this.validacion.validModelo = this.validarCampo(articulo.modelo);
    this.validacion.validDepartamento = this.validarCampo(articulo.departamento);
    this.validacion.validClase = this.validarCampo(articulo.clase);
    this.validacion.validFamilia = this.validarCampo(articulo.familia);

    if (articulo.cantidad > articulo.stock || articulo.cantidad > 999999999 || articulo.cantidad <= 0) {
      this.validacion.validCantidad = false;
    } else {
      this.validacion.validCantidad = this.validarCampo(articulo.cantidad, false);
    }

    if (articulo.stock < articulo.cantidad || articulo.stock > 999999999 || articulo.stock <= 0) {
      this.validacion.validStock = false;
    } else {
      this.validacion.validStock = this.validarCampo(articulo.stock, false);
    }

    return this.validacion
  }

  private validarCampo(valor: any, trim: boolean = true): boolean {
    if (valor === null || valor === undefined || (trim && valor.toString().trim() === '')) {
      return false;
    }
    return true;
  }
}
