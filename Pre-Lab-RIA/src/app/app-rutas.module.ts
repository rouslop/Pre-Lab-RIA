import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { AppComponent } from './app.component';
import { ProductoComponent } from './components/producto/producto.component';
import { VentaComponent } from './components/venta/venta.component';


const rutas: Routes = [
    { path: '', component: AppComponent },
    { path: 'cliente', component: ClientesComponent },
    { path: 'venta', component: VentaComponent },
    { path: 'producto', component: ProductoComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
