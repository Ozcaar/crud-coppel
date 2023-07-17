import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/Model/Articulo';
import { Validacion } from 'src/app/Model/Validacion';
import { ServiceService } from 'src/app/Service/service.service';
import { ValidateService } from 'src/app/Service/validate.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css'],
  providers: [DatePipe]
})
export class AltaComponent implements OnInit {

  sku!: number;
  dep!: number;
  clase!: number;
  fam!: number;

  producto: any;
  obj!: any;

  modelArticulo: any = new Articulo;
  modelValidacion: any = new Validacion;
  articulos: Articulo[] = [];
  departamentos: any[] = [];
  clases: any[] = [];
  familias: any[] = [];

  form!: FormGroup;

  mensaje!: string;
  caseCSS!: string;
  badSKU: boolean = false;
  enabled!: boolean;
  seValida: boolean = true;
  campoVacio: boolean = false;
  fechaActual!: any;
  descontinuado: number = 0;

  validacion: any = Validacion;

  constructor(private service: ServiceService, private validate: ValidateService, private router: Router, private datePipe: DatePipe) {
    this.fechaActual = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit() {

    this.modelArticulo.departamento = null;
    this.modelArticulo.clase = null;
    this.modelArticulo.familia = null;
    this.modelArticulo.descontinuado = false;


    this.service.getArticulo()
      .subscribe(data => {
        this.articulos = data;
      })


    this.service.getDepartamentos()
      .subscribe(data => {
        data.forEach(e => {
          this.departamentos.push(e);
        })
      })
  }

  mostrarMensaje(mensaje: string, caseCSS: string): void {
    this.mensaje = mensaje;
    this.caseCSS = caseCSS;
  }

  onSKUChange(sku: any) {
    sku = this.modelArticulo.sku;
    this.enabled = false;

    if (this.seValida) {
      if (sku === null || sku === undefined || sku.toString().trim() === '') {
        this.badSKU = true;
        this.mostrarMensaje('Todos los campos son requeridos', 'warning');

      } else if (sku.toString().trim().length > 6) {
        this.enabled = false;
        this.badSKU = true;
        this.mostrarMensaje('El SKU no debe superar los 6 dígitos', 'warning');


      } else {

        this.service.getArticuloId(sku)
          .subscribe(data => {
            this.producto = data;
            if (data !== null) {
              //El SKU ya está en la base de datos
              this.enabled = false;
              this.badSKU = true;
              this.mostrarMensaje('El SKU capturado ya se encuentra en la base de datos', 'danger');
            } else {
              this.enabled = true;
              this.badSKU = false;
            }
          })
      }
    }
  }

  onDepChange(dep: any) {
    dep = this.modelArticulo.departamento;
    this.clases = [];
    this.familias = [];

    if (this.seValida) {
      this.service.getClases(dep)
        .subscribe(data => {
          data.forEach(e => {
            this.clases.push(e);
          })
        })
    }
  }

  onClaseChange(dep: any, clase: any) {
    dep = this.modelArticulo.departamento;
    clase = this.modelArticulo.clase;
    this.familias = [];

    if (this.seValida) {
      this.service.getFamilias(dep, clase)
        .subscribe(data => {
          data.forEach(e => {
            this.familias.push(e);
          })
        })
    }
  }

  ///////////////////////////////////////////////

  onSubmit(event: Event) {
    event.preventDefault();
  }

  Guardar(articulo: Articulo, formulario: any) {

    this.obj = this.validate.validarEnviar(articulo);

    this.campoVacio = false;
    Object.keys(this.obj).forEach(key => {
      this.modelValidacion.key = this.obj[key];
      if (!this.obj[key]) this.campoVacio = true
    });

    if (this.campoVacio) {

      this.modelValidacion.validSKU = this.obj.validSKU ? true : false;
      this.modelValidacion.validNombre = this.obj.validNombre ? true : false;
      this.modelValidacion.validMarca = this.obj.validMarca ? true : false;
      this.modelValidacion.validModelo = this.obj.validModelo ? true : false;
      this.modelValidacion.validDepartamento = this.obj.validDepartamento ? true : false;
      this.modelValidacion.validClase = this.obj.validClase ? true : false;
      this.modelValidacion.validFamilia = this.obj.validFamilia ? true : false;
      this.modelValidacion.validStock = this.obj.validStock ? true : false;
      this.modelValidacion.validCantidad = this.obj.validCantidad ? true : false;

      if (this.badSKU == true) {
        this.mostrarMensaje('Todos los campos son requeridos', 'warning');
        this.seValida = true;
        this.badSKU = true;
      }
    } else {
      if (this.validate.validarEnviar(articulo)) {

        this.modelArticulo.fecha_alta = this.fechaActual;
        this.modelArticulo.fecha_baja = this.modelArticulo.descontinuado ? this.fechaActual : '1900-01-01';

        this.service.createArticulo(this.modelArticulo)
          .subscribe(data => {
            if (this.badSKU == false) {

              this.mostrarMensaje('El artículo se ha agregado correctamente', 'success');
              this.badSKU = true;
              setTimeout(() => {
                this.badSKU = false;
              }, 2000);

              this.modelValidacion.validSKU = true;
              this.modelValidacion.validNombre = true;
              this.modelValidacion.validMarca = true;
              this.modelValidacion.validModelo = true;
              this.modelValidacion.validDepartamento = true;
              this.modelValidacion.validClase = true;
              this.modelValidacion.validFamilia = true;
              this.modelValidacion.validStock = true;
              this.modelValidacion.validCantidad = true;

              this.seValida = false;
              formulario.resetForm();
              this.seValida = true;

            }
          })
      }
    }

  }
}
