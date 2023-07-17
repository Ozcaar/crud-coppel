import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaComponent } from './Pages/alta/alta.component';
import { BajaComponent } from './Pages/baja/baja.component';
import { CambioComponent } from './Pages/cambio/cambio.component';
import { ConsultaComponent } from './Pages/consulta/consulta.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    BajaComponent,
    CambioComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
