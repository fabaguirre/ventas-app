import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = 'http://localhost:8080/api/productos'
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getAll(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  get(id: number): Observable<Producto>
  {
    return this.http.get<Producto>(`${this.url}/${id}`);
  }

  update(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(
      `${this.url}/${producto.id}`,
      producto,
      {headers: this.httpHeaders}
    )
  }

  delete(id: number): Observable<Producto>{
    return this.http.delete<Producto>(
    `${this.url}/${id}`,
    {headers: this.httpHeaders}
    )
  }

  create(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(
      this.url, producto, {headers: this.httpHeaders}
    )
  }
}
