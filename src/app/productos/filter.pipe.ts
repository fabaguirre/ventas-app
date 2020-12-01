import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from './producto';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(productos: Producto[], searchTerm: string): any {
    searchTerm=searchTerm.toUpperCase();
    if(searchTerm===""){
      return productos;
    }
    const productosArray:any[]=[];
    for (let index = 0; index < productos.length; index++) {
      let nombre: string = productos[index].nombre.toUpperCase();
      if(nombre.startsWith(searchTerm)){
        productosArray.push(productos[index])
      }
    }
    return productosArray;
  }

}
