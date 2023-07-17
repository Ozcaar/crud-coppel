import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Articulo } from 'src/app/Model/Articulo';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent {

  sku!: number;
  producto: any;
  articulos: Articulo[] = [];
  mensaje!: string;
  caseCSS!: string;
  msg: boolean = false;

  constructor(private service: ServiceService, private router: Router) { }

  mostrarMensaje(mensaje: string, caseCSS: string): void {
    this.mensaje = mensaje;
    this.caseCSS = caseCSS;
  }

  buscarProducto(sku: number) {
    if (sku === null || sku === undefined || sku.toString().trim() === '') {
      //El campo de SKU está vacío
      this.mostrarMensaje('Todos los campos son requeridos', 'warning');
      this.msg = true;

    } else if (sku.toString().trim().length > 6) {
      //El campo de SKU tiene más de 6 dígitos
      this.mostrarMensaje('El SKU no debe superar los 6 dígitos', 'warning');
      this.msg = true;

    } else {
      //El campo de SKU está correcto
      this.msg = false;
      this.service.getArticuloId(sku)
        .subscribe(data => {
          this.producto = data;
          if (data === null) {
            //No se encontró en la base de datos
            this.mostrarMensaje('El SKU capturado no se encuentra en la base de datos', 'danger');
            this.msg = true;
            setTimeout(() => {
              this.msg = false;
            }, 2000);
          }
        })
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }

  eliminarArticulo(articulo: Articulo, event: Event) {
    const elemento = event.target as HTMLElement;
    if (elemento.getAttribute('name') === 'eliminar') {
      if (confirm('¿Está seguro que desea eliminar el artículo?')) {

        this.service.deleteArticulo(articulo.sku)
          .subscribe(data => {
            this.mostrarMensaje('El artículo se ha eliminado correctamente', 'success');
            this.msg = true;
            setTimeout(() => {
              this.msg = false;
            }, 2000);
            elemento.parentElement?.parentElement?.parentElement?.remove();
          })


      }
    }
  }
}
