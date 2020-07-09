import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products/products.service';

@Component({
  selector: 'app-table-paris',
  templateUrl: './table-paris.component.html',
  styleUrls: ['./table-paris.component.css']
})
export class TableParisComponent implements OnInit {
  products: Array<object>;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.products;
  }

}
