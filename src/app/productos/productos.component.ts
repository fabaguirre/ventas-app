import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';
import swal from "sweetalert2";
import { TokenService } from '../security/services/token.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];
  searchTerm: string="";

  roles: string[];
  isAdmin = false;

  constructor(
    private productoService: ProductoService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      productos => {this.productos = productos}
    );

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    });
  }

  delete(producto: Producto): void{
    swal.fire({
      title: 'Esta seguro?',
      text: `Seguro de Eliminar ${producto.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar!',
      cancelButtonText: 'No, cancelar!'
    }).then((result) => {
      if(result.value){
        this.productoService.delete(producto.id).subscribe(
          response => {
            this.productos = this.productos.filter(cli => cli !== producto)
            swal.fire(
              'Borrado',
              'Producto Eliminado',
              'success'
            )
          }
        )        
      }
    })
  }

}
