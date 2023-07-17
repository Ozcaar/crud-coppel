import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-coppel';

  constructor(private router:Router){}
  
  Alta(){
    this.router.navigate(['Alta']);
  }

  Baja(){
    this.router.navigate(['Baja']);
  }

  Cambio(){
    this.router.navigate(['Cambio']);
  }

  Consulta(){
    this.router.navigate(['Consulta']);
  }
}
