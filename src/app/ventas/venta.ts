import { LineaVenta } from './linea-venta';

export class Venta {
    id: number;
    fecha: Date;
    lineasVenta: LineaVenta[] = new Array();
    total: number;

    public buscarLineaVenta(idProducto: number): LineaVenta {
        for (let index = 0; index < this.lineasVenta.length; index++) {
            if(this.lineasVenta[index].producto.id == idProducto){
                return this.lineasVenta[index];
            }
        }
        return null;
    }
    
    public calcularTotal(): number{
        let total: number = 0;
        for (let index = 0; index < this.lineasVenta.length; index++) {
            total += this.lineasVenta[index].calcularTotal();
        }
        return total;
    }
}