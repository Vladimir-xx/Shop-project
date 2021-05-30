import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../shared/product.service';
import {switchMap} from 'rxjs/operators';
import {Product} from '../shared/interfaces';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product$ ;
  loading: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(switchMap(params => {
      return this.productService.getById(params['id']);
    }));

  }
}
