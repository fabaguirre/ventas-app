import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { FormComponent as FormProductoComponent} from './productos/form.component';
import { VentasComponent } from './ventas/ventas.component';
import { FormComponent as FormVentaComponent} from './ventas/form.component';
import { DetallesComponent } from './ventas/detalles.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { ProdGuardService as guard} from './guards/prod-guard.service';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'productos', component: ProductosComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path: 'productos/form', component: FormProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  {path: 'productos/form/:id', component: FormProductoComponent, canActivate: [guard], data: { expectedRol: ['admin']} },
  {path: 'ventas', component: VentasComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path: 'ventas/form', component: FormVentaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  {path: 'ventas/:id', component: DetallesComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
