import { Producto } from '../productos/producto';

export class LineaVenta {
    id: number;
    producto: Producto;
    cantidad: number;
    total: number;

    public calcularTotal(): number{
        return this.cantidad * this.producto.precioUnitario;
    }
}
