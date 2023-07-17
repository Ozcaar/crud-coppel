import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Articulo } from 'src/app/Model/Articulo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent{

  sku!: number;
  producto: any;
  articulos: Articulo[] = [];
  mensaje!: string;
  caseCSS!: string;
  timeOut: boolean = false;

  constructor(private service: ServiceService, private router: Router) { }

  mostrarMensaje(mensaje: string, caseCSS: string): void {
    this.mensaje = mensaje;
    this.caseCSS = caseCSS;
  }

  buscarProducto(sku: number) {
    if (sku === null || sku === undefined || sku.toString().trim() === '') {
      //El campo de SKU está vacío
      if (this.timeOut == false) {
        this.mostrarMensaje('Todos los campos son requeridos', 'warning');
        this.timeOut = true;
        setTimeout(() => {
          this.timeOut = false;
        }, 5000);
      }

    } else if (sku.toString().trim().length > 6) {
      //El campo de SKU tiene más de 6 dígitos
      this.timeOut = false;
      if (this.timeOut == false) {
        this.mostrarMensaje('El SKU no debe superar los 6 dígitos', 'warning');
        this.timeOut = true;
        setTimeout(() => {
          this.timeOut = false;
        }, 5000);
      }

    } else {
      //El campo de SKU está correcto
      this.service.getArticuloId(sku)
        .subscribe(data => {
          this.timeOut = false;
          this.producto = data;

          if (data === null) {
            //No se encontró en la base de datos
            this.mostrarMensaje('El SKU capturado no se encuentra en la base de datos', 'danger');
            this.timeOut = true;
            setTimeout(() => {
              this.timeOut = false;
            }, 5000);
          }
        })
    }
  }
}








