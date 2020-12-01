import { Component, OnInit } from '@angular/core';
import { VentaService } from './venta.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Venta } from './venta';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  venta: Venta;
  constructor(private ventaService: VentaService, private router: Router, private activatedToute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarVenta();
  }

  cargarVenta(): void{
    this.activatedToute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.ventaService.get(id)
        .subscribe(
          (venta) => this.venta = venta
        )
      }
    })
  }
}
