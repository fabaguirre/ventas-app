import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoService } from './productos/producto.service';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './productos/filter.pipe';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './productos/form.component';
import { VentasComponent } from './ventas/ventas.component';
import { FormComponent as FormVentaComponent } from "./ventas/form.component";
import { DetallesComponent } from './ventas/detalles.component';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    FilterPipe,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    VentasComponent,
    FormVentaComponent,
    DetallesComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductoService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
