import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  cart=[];
  products=[];
  cartItemCount: BehaviorSubject<number>;

  constructor(private cartService: CartService, private modalCtrl: ModalController) {}

  ngOnInit(){
    this.products=this.cartService.getProducts();
    this.cart=this.cartService.getCart();
    this.cartItemCount=this.cartService.getCartItemCount();
  }
   addToCart(product){

   }

   openCart(){}
}
