import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Venta } from './venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private url: string = 'https://ventasoft0.herokuapp.com/api/ventas'
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getAll(): Observable<Venta[]>{
    return this.http.get<Venta[]>(this.url);
  }

  get(id: number): Observable<Venta>
  {
    return this.http.get<Venta>(`${this.url}/${id}`);
  }

  create(venta: Venta): Observable<Venta>{
    return this.http.post<Venta>(
      this.url, venta, {headers: this.httpHeaders}
    )
  }
}
