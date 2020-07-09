import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nextStatus = 'en stock';

  products: Array<object>;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.products;
    console.log(this.products);
  }

  /**
   * Method called when user click on the switch button
   */
  onSwitchAllStatus() {
    this.productsService.switchProductsStatus(this.nextStatus);

    if (this.nextStatus === 'en stock') {
      this.nextStatus = 'pas en stock';
    } else {
      this.nextStatus = 'en stock';
    }
  }
}
