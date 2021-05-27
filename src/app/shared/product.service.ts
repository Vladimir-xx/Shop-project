import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {FbResponse, Product} from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  create(product: Product) {
    return this.http.post(`${environment.fbDbUrl}/products.json`, product).pipe(map((res: FbResponse) => {
      console.log(res)
      return {
        ...product,
        id: res.name,
        date: new Date(product.date)
      };
    }));
  }
}
