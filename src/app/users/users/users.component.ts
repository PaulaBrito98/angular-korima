import {Component, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}
interface Users {
  id?: number;
  nombre: string;
  apellido: string;
  edad?: number;

}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  products!: Product[];
  users!: Users[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
    this.productService.getUsuarioMini().then((data)=>
    this.users=data);

  }
}
