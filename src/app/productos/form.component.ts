import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from "sweetalert2";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public producto: Producto = new Producto();
  public titulo: string = "Crear Producto"
  constructor(private productoService: ProductoService, private router: Router, private activatedToute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarProducto();
  }

  public cargarProducto(): void{
    this.activatedToute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.productoService.get(id)
        .subscribe(
          (producto) => this.producto = producto
        )
      }
    })
  }

  public create(): void{
    this.productoService.create(this.producto).subscribe(
        producto => {
          swal.fire(
            'Nuevo Producto',
            `Producto ${producto.nombre} creado con éxito`,
            'success'
          )
          this.goto("../productos")
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

  update(): void{
    this.productoService.update(this.producto).subscribe(
      producto => {
        swal.fire('Producto Actualizado',
        `Producto ${producto.nombre} actualizado con éxito`,
        'success')
        this.goto("../productos")
      }
    );
  }
}
