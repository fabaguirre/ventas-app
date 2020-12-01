import { Component, OnInit } from '@angular/core';
import { Venta } from './venta';
import { Router, ActivatedRoute } from '@angular/router';
import swal from "sweetalert2";
import { VentaService } from './venta.service';
import { ProductosComponent } from '../productos/productos.component';
import { Producto } from '../productos/producto';
import { ProductoService } from '../productos/producto.service';
import { LineaVenta } from './linea-venta';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public venta: Venta = new Venta();
  public titulo: string = "Crear Venta";
  public productos: Producto[];
  searchTerm: string = "";
  constructor(private productoService: ProductoService, private ventaService: VentaService, private router: Router, private activatedToute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      productos => {this.productos = productos}
    );
  }

  public create(): void{
    this.ventaService.create(this.venta).subscribe(
        venta => {
          swal.fire(
            'Nuevo venta',
            `Venta ${venta.id} creada con éxito`,
            'success'
          )
          this.goto("../ventas")
        }
    );
  }

  public goto(url){
    this.router.navigate([url]).then( (e) => {
      if(e){
        console.log("Navigation is successfull!");
      }
      else{
        console.log("Navigation has failed!");
      }
    });
  }

  public addLineaVenta(producto: Producto): void{
    if(producto.stock == 0) return;
    let lineaVenta: LineaVenta = this.venta.buscarLineaVenta(producto.id);
    if(lineaVenta === null){
      lineaVenta = new LineaVenta();
      lineaVenta.cantidad = 1;
      lineaVenta.producto = producto;
      this.venta.lineasVenta = this.venta.lineasVenta.concat(lineaVenta);
      console.log("Nueva Linea");
    }
    else if(lineaVenta.cantidad + 1 > producto.stock){
      return
    }
    else{
      lineaVenta.cantidad++;
    }
  }

  public deleteLineaVente(index: number): void{
    this.venta.lineasVenta.splice(index, 1);
  }

}
