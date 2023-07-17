import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './Pages/alta/alta.component';
import { BajaComponent } from './Pages/baja/baja.component';
import { CambioComponent } from './Pages/cambio/cambio.component';
import { ConsultaComponent } from './Pages/consulta/consulta.component';

const routes: Routes = [
  {path:'Alta', component:AltaComponent},
  {path:'Baja', component:BajaComponent},
  {path:'Cambio', component:CambioComponent},
  {path:'Consulta', component:ConsultaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
