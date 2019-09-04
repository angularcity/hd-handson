import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  productsUrl = "http://localhost:3000/products";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl).pipe(
      //tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProductByID(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.productsUrl}/${id}`).pipe(
      //tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
