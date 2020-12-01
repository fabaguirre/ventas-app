import { Component, OnInit } from '@angular/core';
import { Venta } from './venta';
import { VentaService } from './venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  ventas: Venta[];
  constructor(private ventaService: VentaService) { }

  ngOnInit(): void {
    this.ventaService.getAll().subscribe(
      ventas => { this.ventas = ventas }
    )
  }
}
