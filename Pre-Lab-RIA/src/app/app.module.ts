import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-rutas.module';
import { AppComponent } from './app.component';
import { VentaComponent } from './components/venta/venta.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InicioComponent  } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    ProductoComponent,
    ClientesComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
