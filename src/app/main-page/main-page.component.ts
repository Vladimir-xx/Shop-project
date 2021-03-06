import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/product.service';
import {Product} from '../shared/interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  products$;

  constructor(
    private productServ: ProductService
  ) {
  }

  ngOnInit(): void {
    this.products$ = this.productServ.getAll();

  }

}
